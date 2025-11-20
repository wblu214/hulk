import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { getContent, Lang, TECH_STACK } from '../constants';
import { TechItem } from '../types';

interface Point {
  x: number;
  y: number;
}

interface SnakeSegment extends Point {
  item: TechItem;
  id: string;
}

const TechStack: React.FC<{ lang: Lang }> = ({ lang }) => {
  const content = getContent(lang).tech;
  
  // Animation Trigger
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3, once: false });

  // Grid settings
  const [gridSize, setGridSize] = useState({ cols: 8, rows: 6 });

  // Game State
  const [snake, setSnake] = useState<SnakeSegment[]>([]);
  const [food, setFood] = useState<SnakeSegment | null>(null);
  const [nextTechIndex, setNextTechIndex] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  
  // 1. Initialize Grid
  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.offsetWidth;
      const cellWidth = window.innerWidth < 640 ? 45 : 65;
      const cols = Math.floor(width / cellWidth);
      const rows = Math.floor(cols * 0.6); // Rectangular board
      setGridSize({ cols, rows });
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => window.removeEventListener('resize', updateGrid);
  }, []);

  // 2. Helper: Get random empty cell
  const getRandomEmptyCell = useCallback((currentSnake: SnakeSegment[]): Point => {
    let attempts = 0;
    while (attempts < 50) {
      const x = Math.floor(Math.random() * gridSize.cols);
      const y = Math.floor(Math.random() * gridSize.rows);
      const occupied = currentSnake.some(s => s.x === x && s.y === y);
      if (!occupied) return { x, y };
      attempts++;
    }
    return { x: 0, y: 0 };
  }, [gridSize]);

  // 3. Game Logic Helpers
  const getNextMove = (head: Point, target: Point, obstacles: SnakeSegment[]): Point | null => {
    const moves = [
      { x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }
    ];
    
    // Sort moves by distance to target to encourage direct paths
    moves.sort((a, b) => {
      const distA = Math.abs((head.x + a.x) - target.x) + Math.abs((head.y + a.y) - target.y);
      const distB = Math.abs((head.x + b.x) - target.x) + Math.abs((head.y + b.y) - target.y);
      return distA - distB;
    });

    // Try to find a valid move
    for (const move of moves) {
      const nextX = head.x + move.x;
      const nextY = head.y + move.y;
      
      // Check bounds
      if (nextX < 0 || nextX >= gridSize.cols || nextY < 0 || nextY >= gridSize.rows) continue;
      
      // Check collision (Strict mode off: if we are trapped, we cheat and overlay to keep animation flowing)
      // Real game would die, here we just want to visualize the stack.
      // So we only avoid if we can.
      const isBlocked = obstacles.some(obs => obs.x === nextX && obs.y === nextY);
      
      if (!isBlocked) return move;
    }

    // If all blocked, pick the one that stays in bounds (Cheat mode)
    for (const move of moves) {
        const nextX = head.x + move.x;
        const nextY = head.y + move.y;
        if (nextX >= 0 && nextX < gridSize.cols && nextY >= 0 && nextY < gridSize.rows) {
            return move;
        }
    }

    return null;
  };

  // 4. Control Game Loop based on Visibility
  useEffect(() => {
    if (isInView && gridSize.cols > 0) {
      // START / RESTART
      const startX = Math.floor(gridSize.cols / 2);
      const startY = Math.floor(gridSize.rows / 2);
      const firstItem = TECH_STACK[0];
      
      const initialSnake = [{ 
        x: startX, 
        y: startY, 
        item: firstItem, 
        id: `seg-${firstItem.slug}-0` 
      }];

      setSnake(initialSnake);
      setNextTechIndex(1);
      setIsComplete(false);
      
      // Spawn first food
      if (TECH_STACK.length > 1) {
        const nextItem = TECH_STACK[1];
        // Find simple safe spot
        let foodX = (startX + 2) % gridSize.cols;
        let foodY = startY;
        
        setFood({ 
          x: foodX, 
          y: foodY, 
          item: nextItem, 
          id: `food-${nextItem.slug}-1` 
        });
      }
      
      setIsGameActive(true);
    } else {
      // RESET / PAUSE
      setIsGameActive(false);
      setSnake([]); // Clear board to be ready for next entry
      setFood(null);
      setIsComplete(false);
    }
  }, [isInView, gridSize]); // Depend on isInView to toggle

  // 5. Game Loop Interval
  useEffect(() => {
    if (!isGameActive || isComplete) return;

    const tickRate = 150; // Speed in ms

    const interval = setInterval(() => {
      setSnake(prevSnake => {
        if (prevSnake.length === 0) return prevSnake;

        const head = prevSnake[0];
        let target = food;

        // If no food, we might be done or just transitioning
        if (!target) {
             if (nextTechIndex >= TECH_STACK.length) {
                 // DONE
                 setIsGameActive(false);
                 setIsComplete(true);
                 return prevSnake;
             }
             return prevSnake; 
        }

        const move = getNextMove(head, target, prevSnake);
        if (!move) return prevSnake; 

        const newHeadPos = { x: head.x + move.x, y: head.y + move.y };
        
        // Check Eat
        if (food && newHeadPos.x === food.x && newHeadPos.y === food.y) {
          // Add new head (the food)
          const newSegment = { ...newHeadPos, item: food.item, id: food.id };
          const newSnake = [newSegment, ...prevSnake];
          
          // Spawn next
          if (nextTechIndex < TECH_STACK.length - 1) {
            const nextIdx = nextTechIndex + 1;
            const nextItem = TECH_STACK[nextIdx];
            const nextPos = getRandomEmptyCell(newSnake);
            setNextTechIndex(nextIdx);
            setFood({ 
                x: nextPos.x, 
                y: nextPos.y, 
                item: nextItem, 
                id: `food-${nextItem.slug}-${nextIdx}` 
            });
          } else {
            // No more food, process finish on next tick or now
            setFood(null);
            setNextTechIndex(nextTechIndex + 1);
          }
          
          return newSnake;
        } else {
          // Move
          const newSnake = [...prevSnake];
          for (let i = newSnake.length - 1; i > 0; i--) {
            newSnake[i] = { ...newSnake[i], x: newSnake[i-1].x, y: newSnake[i-1].y };
          }
          newSnake[0] = { ...newSnake[0], x: newHeadPos.x, y: newHeadPos.y };
          return newSnake;
        }
      });
    }, tickRate);

    return () => clearInterval(interval);
  }, [isGameActive, isComplete, food, gridSize, nextTechIndex, getRandomEmptyCell]);

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-900 dark:text-white mb-4">
            {content.title}
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
             <div className={`w-2 h-2 rounded-full ${isComplete ? 'bg-blue-500' : 'bg-green-500 animate-pulse'}`}></div>
             <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase">
                {isComplete ? 'System Ready' : `Compiling Stack... ${Math.round((snake.length / TECH_STACK.length) * 100)}%`}
             </span>
          </div>
        </div>

        {/* Game Board */}
        <div className="relative w-full flex justify-center">
          <div 
            ref={containerRef}
            className="relative w-full max-w-4xl bg-slate-200 dark:bg-slate-800/50 rounded-xl border-4 border-slate-300 dark:border-slate-700 shadow-inner overflow-hidden"
            style={{
              aspectRatio: `${gridSize.cols} / ${gridSize.rows}`,
              minHeight: '300px'
            }}
          >
            {/* Background Grid */}
            <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
                    backgroundSize: `${100 / gridSize.cols}% ${100 / gridSize.rows}%`
                }}
            />

            <AnimatePresence>
              {food && (
                <motion.div
                  key={food.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="absolute flex items-center justify-center p-1"
                  style={{
                    width: `${100 / gridSize.cols}%`,
                    height: `${100 / gridSize.rows}%`,
                    left: `${(food.x / gridSize.cols) * 100}%`,
                    top: `${(food.y / gridSize.rows) * 100}%`,
                    zIndex: 30
                  }}
                >
                  <div 
                    className="w-full h-full bg-white dark:bg-slate-900 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] border-2 border-dashed animate-pulse flex items-center justify-center"
                    style={{ borderColor: food.item.color }}
                  >
                      <img 
                        src={food.item.iconUrl || `https://cdn.simpleicons.org/${food.item.slug}/${food.item.color.replace('#', '')}`}
                        alt="food"
                        className="w-[70%] h-[70%] object-contain"
                      />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Snake Segments */}
            {snake.map((segment, index) => {
              const isHead = index === 0;
              return (
                <motion.div
                    key={segment.id}
                    layoutId={segment.id} // Smooth layout transition
                    initial={false} 
                    animate={{ 
                        left: `${(segment.x / gridSize.cols) * 100}%`,
                        top: `${(segment.y / gridSize.rows) * 100}%`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute p-[2px]"
                    style={{
                        width: `${100 / gridSize.cols}%`,
                        height: `${100 / gridSize.rows}%`,
                        zIndex: isHead ? 20 : 10
                    }}
                >
                    <div 
                        className={`
                            w-full h-full rounded-md flex items-center justify-center transition-all duration-300
                            ${isHead 
                                ? 'bg-white dark:bg-slate-800 shadow-xl ring-2 ring-offset-2 dark:ring-offset-slate-900 scale-110 z-10' 
                                : 'bg-slate-100 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700/50'
                            }
                        `}
                        style={{ 
                            '--tw-ring-color': isHead ? segment.item.color : undefined
                        } as React.CSSProperties}
                    >
                        <img 
                            src={segment.item.iconUrl || `https://cdn.simpleicons.org/${segment.item.slug}/${segment.item.color.replace('#', '')}`}
                            alt={segment.item.name}
                            className={`object-contain transition-all duration-500 ${isHead ? 'w-[80%] h-[80%]' : 'w-[60%] h-[60%] grayscale-[30%]'}`}
                        />
                    </div>
                </motion.div>
              );
            })}
            
            {/* Victory Overlay (Optional, subtle) */}
            {isComplete && (
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-t from-green-500/10 to-transparent animate-pulse"></div>
                </div>
            )}

          </div>
        </div>
        
        {/* Footer Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
            {TECH_STACK.map(t => (
                <div 
                    key={t.name} 
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium transition-all duration-500 ${snake.some(s => s.item.name === t.name) ? 'opacity-100 scale-105 bg-white dark:bg-slate-800 shadow-sm' : 'opacity-40 grayscale'}`}
                >
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: t.color }}></div>
                    <span className="text-slate-700 dark:text-slate-300">{t.name}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;