export default function Buttons(props: ButtonsProps) {
  return (
    <div
      className={`h-12 absolute text-center font-medium w-[313px] top-[530px] right-[31px] font-['Poppins'] text-[rgba(245,248,250,1)]`}
    >
      <div className="inset-0 absolute rounded bg-[rgba(0,158,247,1)]" />
      <p
        className="inset-x-2 h-6 absolute text-sm inline m-0 w-[297px] top-[calc(50%_-_12px_+_0px)] leading-[normal]"
      >
        Register
      </p>
    </div>
  );
}

Buttons.defaultProps = {};

interface ButtonsProps {}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
