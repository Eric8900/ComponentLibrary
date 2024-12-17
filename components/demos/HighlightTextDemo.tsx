import HighlightText from "@/components/ui/highlight-text";

function HighlightTextDemo() {
    return (
      <div className='text-center text-5xl font-bold max-w-3xl mx-auto leading-tight'>
        For all the moments you need to <HighlightText className='bg-gradient-to-r from-sky-300 to-blue-300 dark:from-sky-600 dark:to-blue-600'>highlight text</HighlightText>
      </div>
    );
  }
  
  export default HighlightTextDemo;