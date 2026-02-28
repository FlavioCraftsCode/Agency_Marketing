interface DottedGridProps {
  color?: string;
  size?: number;
}

export default function DottedGrid({ color = '#3b82f6', size = 12 }: DottedGridProps) {
  return (
    <div 
      className="opacity-40"
      style={{
        width: '400px',
        height: '400px',
        backgroundImage: `radial-gradient(${color} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
      }} 
    />
  );
}