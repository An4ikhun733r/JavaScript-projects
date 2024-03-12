export const blankProjectLoad = () => {
  console.log('creating array for to dos');
  const projectsArray = [];
  console.log('pushing name pojects to array');
  const projectName = [];
  projectsArray.push({ projectName });
  console.log(projectsArray);
  return { projectsArray, projectName };
};
