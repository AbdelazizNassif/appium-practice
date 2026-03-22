const SplashScreen = require('../../screenobjects/splash.screen');
const TopNavBar = require('../../screenobjects/topNavBar.screen');
const NoteTypeModal = require('../../screenobjects/noteTypeModal.screen');
const NotesCreationScreen = require('../../screenobjects/notesCreationScreen.screen');
const NotesListingScreen = require('../../screenobjects/notesListingScreen.screen');
const NotesOptionsWidget = require('../../screenobjects/notesOptionsWidget.screen');
const AlertDialog = require('../../screenobjects/alertDialog.screen');
const MainSideMenu = require('../../screenobjects/mainSideMenu.screen');
const TrashCanListingScreen = require('../../screenobjects/trashCanListingScreen.screen');



describe('Appium mobile test', () => {
    const noteText = 'This is a test note';
    const splashScreen = new SplashScreen();
    const topNavBar = new TopNavBar();
    const noteTypeModal = new NoteTypeModal();
    const notesCreationScreen = new NotesCreationScreen();
    const notesListingScreen = new NotesListingScreen();
    const notesOptionsWidget = new NotesOptionsWidget();
    const alertDialog = new AlertDialog();
    const mainSideMenu = new MainSideMenu();
    const trashCanListingScreen = new TrashCanListingScreen();

    it('user should be able to skip tutorial, add a note & delete the note', async () => {
        // spalash screen
        await splashScreen.skipTutorial();
        // top nav screen
        await expect(topNavBar.logo).toBeDisplayed();
    });
    it('should be able to add note', async () => {
        // top nav screen 
        await topNavBar.clickAddButton();
        // note type modal
        await noteTypeModal.selectTextNote();
        // note creation screen
        await notesCreationScreen.enterNoteText(noteText);
        // top nav bar
        await topNavBar.clickBackButton();
        await topNavBar.clickBackButton();
        // notes listing page
        expect(notesListingScreen.noteTitles)
            .toHaveText('This is a test note');
    });
    it('should be able to delete note', async () => {
        await notesListingScreen.clickNoteByText(noteText);
        // top nav screen
        await topNavBar.clickMoreButton();
        // notes options widget
        await notesOptionsWidget.clickDelete();
        // alert dialog
        await expect(alertDialog.message)
            .toHaveText('Are you sure you want to move the note to the trash can?');
        await alertDialog.confirm();
        // notes listing page
        // expect(await notesListingScreen.isNoteNotExisting(noteText)).toBe(true);
        // top nav screen
        await topNavBar.clickNavIcon();
        // main side menu
        await mainSideMenu.clickTrashCan();
        // trash can list screen
        expect(await trashCanListingScreen.isNoteInTrash(noteText)).toBe(true);
    });
});