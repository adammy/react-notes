import NotebookList from '../structures/NotebookList';

const NotebooksData = new NotebookList();

// init notebooks
NotebooksData.addNotebook('Work').addNotebook('School');

// init school notes
NotebooksData.getNotebookByName('School').addNote('Class Schedule').addNote('Graduate School Essay').addNote('Upcoming Projects');

// populate school notes
NotebooksData.getNotebookByName('School').getNoteByName('Class Schedule').setContentWithHTML("<p>Hello3</p>").setDateTimeToNow();
NotebooksData.getNotebookByName('School').getNoteByName('Graduate School Essay').setContentWithHTML("<p>Hello2</p>").setDateTimeToNow();
NotebooksData.getNotebookByName('School').getNoteByName('Upcoming Projects').setContentWithHTML("<p>Hello1</p>").setDateTimeToNow();

// init work notes
NotebooksData.getNotebookByName('Work').addNote('Work To-Do');

// populate work notes
NotebooksData.getNotebookByName('Work').getNoteByName('Work To-Do').setContentWithHTML("<p>Hello4</p>").setDateTimeToNow();


export default NotebooksData;
