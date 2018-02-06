import NotebookList from '../structures/NotebookList';

const NotebooksData = new NotebookList();

// init notebooks
NotebooksData.addNotebook('Work').addNotebook('School');

// init school notes
NotebooksData.getNotebookByName('School').addNote('Class Schedule').addNote('Graduate School Essay').addNote('Upcoming Projects');

// populate school notes
NotebooksData.getNotebookByName('School').getNoteByName('Class Schedule').setContentWithHTML("<p><strong>Monday</strong></p><p>10am–12pm / Programming / Room COP 1203</p><p><strong>Tuesday</strong></p><p>1pm–3:15pm / User-Centered Design / Room VAB 205</p><p><strong>Friday</strong></p><p>10am–12pm / Programming / Room COP 1203</p>").setDateTimeUpdated(new Date('December 29, 2017 08:54:00'));
NotebooksData.getNotebookByName('School').getNoteByName('Graduate School Essay').setContentWithHTML("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><ul><li>Maecenas sed tellus eleifend magna.</li><li>Morbi quam ligula, dictum sed.</li><li>Mauris tincidunt augue vitae volutpat.</li></ul><p>Suspendisse urna ipsum, bibendum quis nunc ac, tempor tincidunt ipsum. Vestibulum eu iaculis dui, at porta orci. In ornare faucibus congue. Etiam in commodo lorem. Vestibulum volutpat, justo vitae viverra tincidunt, est nibh porta nulla.</p>").setDateTimeUpdated(new Date('January 27, 2018 18:03:33'));
NotebooksData.getNotebookByName('School').getNoteByName('Upcoming Projects').setContentWithHTML("<p><strong>Programming</strong></p><ul><li>Java OOP Bank Assignment (Feb 3)</li><li>Group Java Spring API Assignment (Feb 20)</li></ul><p><strong>User-Centered Design</strong></p><ul><li>Empathy Map Assignment (Feb 5)</li><li>User Personas Assignment (Feb 12)</li></ul><p><strong>Miscellaneous</strong></p><ul><li>Graduate School Essay</li></ul>").setDateTimeUpdated(new Date('January 29, 2018 11:24:00'));

// init work notes
NotebooksData.getNotebookByName('Work').addNote('Work To-Do');

// populate work notes
NotebooksData.getNotebookByName('Work').getNoteByName('Work To-Do').setContentWithHTML("<p><strong>Sales & Marketing</strong></p><ul><li>Design and develop e-mails and corresponding landing pages for lead generation.</li><li>Social media marketing</li></ul><p><strong>Human Resources</strong></p><ul><li>Design and develop internal e-mail template</li><li>Find a photo for LinkedIn ad</li></ul>").setDateTimeUpdated(new Date('January 26, 2018 09:32:20'));


export default NotebooksData;
