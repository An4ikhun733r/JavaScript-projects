import { parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip';
import { saveToDoToLocal } from './manage-local-storage';

const toDoArray = [];

export const createToDo = () => {
  const Title = document.getElementById('Title').value;
  const Description = document.getElementById('Description').value;
  const DueDate = document.getElementById('DueDate').value;
  const Priority = document.getElementById('Priority').value;

  if (Title === '' || Description === '' || DueDate === '') {
    alert('The Title, Desctiption and Due Date are required fields');
    return;
  }

  if (parseISO(DueDate) < startOfToday()) {
    alert('This date is already passed!');
    console.log('Due Date: ', DueDate);
    console.log('Current Date: ', startOfToday());
    return;
  }

  const nodeListCheckList = document.querySelectorAll('li');
  const CheckListArray = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < nodeListCheckList.length; i++) {
    const strippedCheckList = nodeListCheckList[i].textContent.replace(
      '\u00D7',
      '',
    );
    CheckListArray.push(strippedCheckList);
  }

  const CheckList = CheckListArray.join(', ');

  console.log('called createToDo module, creating todo now');
  console.log({ Title, Description, DueDate, Priority, CheckList });
  console.log('pushed the data in the array');
  toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
  console.log(toDoArray);

  saveToDoToLocal({ Title, Description, DueDate, Priority }, CheckList);

  clearForm();
  return { Title, Description, DueDate, Priority, CheckList };
};
