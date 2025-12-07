import AdUnit from './AdUnit';

interface SidebarAdProps {
  slot: string;
  className?: string;
}

const SidebarAd = ({ slot, className = '' }: SidebarAdProps) => {
  return (
    <div className={`w-full p-4 rounded-lg bg-muted/30 border border-border/30 ${className}`}>
      <div className="text-xs text-muted-foreground text-center mb-2">Sponsored</div>
      <AdUnit slot={slot} format="rectangle" responsive={true} />
    </div>
  );
};

export default SidebarAd;
