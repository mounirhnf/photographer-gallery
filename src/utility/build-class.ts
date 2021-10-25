//------------------------------------------------------------------------------
// This is a function that conditionally builds custom classNames.
// It's a simplified version of the clsx module on npm.
//------------------------------------------------------------------------------

type BuildClass = (...c: ((string | boolean | undefined | null)[])) => string;

//------------------------------------------------------------------------------

const buildClass: BuildClass = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

//------------------------------------------------------------------------------

export default buildClass;
