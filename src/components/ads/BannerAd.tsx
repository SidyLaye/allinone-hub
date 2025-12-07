import AdUnit from './AdUnit';

interface BannerAdProps {
  slot: string;
  className?: string;
}

const BannerAd = ({ slot, className = '' }: BannerAdProps) => {
  return (
    <div className={`w-full py-4 flex justify-center ${className}`}>
      <div className="w-full max-w-4xl">
        <AdUnit slot={slot} format="horizontal" responsive={true} />
      </div>
    </div>
  );
};

export default BannerAd;
