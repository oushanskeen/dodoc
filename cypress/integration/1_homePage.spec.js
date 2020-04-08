import {state} from '../../src/state.js';

const initState = {home:state.hello};// "hello"

context("The Home Page", ()=>{
    beforeEach(()=> {
        cy.visit('http://localhost:3000/dodoc',{
            onBeforeLoad (win) {
                cy.spy(win.console, 'log').as('consoleLog')
            }
        });
    });

    it('has expected state on load', () => 
        { cy.window()
            .its('store')
            .invoke('getState')
            .should('deep.equal', initState)
    });

    it('successfully loads', () => {
        cy.visit('http://localhost:3000/dodoc');
    });
    //it('succesfully logs  initial store',()=>{
    //    cy.get('@consoleLog')
    //    .should('be.calledWith',{})
    //});
    
    it('contains created dogovor text', () => {
        cy.get('#dogovorText');  
        //cy.get('#beerPicLog').contains('+ - - - - - -');    
    });      
    it('contains panel with variables', () => {
        cy.get('#varsPanel');  
        //cy.get('#beerPicLog').contains('+ - - - - - -');    
    });
    it('contains panel with yurfaces', () => {
        cy.get('#yurfacesPanel');  
        //cy.get('#beerPicLog').contains('+ - - - - - -');    
    });
    it('contains panel with types of contract', () => {
        cy.get('#contractTypesPanel');  
        //cy.get('#beerPicLog').contains('+ - - - - - -');    
    });
     
    /*
      it('contains some welcome text', () => {
        cy.contains("This lil app aimed to help you navigating in our fancy beer forest.");
      });
      it('contains link to a gallery', () => {
        cy.contains('GO TO GALLERY');
      });
      it('successfully loads gallery page', () => {
        cy.contains('GO TO GALLERY').click();
        cy.url().should('include', '/gallery');
      });    
    */
});
