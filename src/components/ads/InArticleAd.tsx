import AdUnit from './AdUnit';

interface InArticleAdProps {
  slot: string;
  className?: string;
}

const InArticleAd = ({ slot, className = '' }: InArticleAdProps) => {
  return (
    <div className={`w-full py-6 my-6 border-y border-border/30 ${className}`}>
      <div className="text-xs text-muted-foreground text-center mb-2">Advertisement</div>
      <AdUnit slot={slot} format="fluid" responsive={true} />
    </div>
  );
};

export default InArticleAd;
