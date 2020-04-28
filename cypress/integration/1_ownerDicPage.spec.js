const initState = {  
    home:{message:"simple hello"},
    ownerDic:[
      {
        id:"1",
        name:'ООО УКИ',
        params:
        {
            "welcome": "grapes",
            "post-effect": "tears",
            "song": "Billy Eilish - When the party is over"
        }
        /*,
        description:
        `Polly's Brew:
         A Ritzy Experience.
         India Pale Ale at 7% hopped with Ekuanot, 
         more Ekuanot, and even more Ekuanot. If you like
         Ekuanot, then step right up. It’s fresh off the 
         canning line and ready to drink!`
        */
      }//,
    ]
    //choice:{isSelected: " "},
    //selection:{outcome:" "}
};

    context("The OwnerDic Page", ()=>{
        beforeEach(()=> {
            cy.visit('http://localhost:3000/dodoc/ownerdic');
    });

      it('successfully loads', () => {
        cy.visit('http://localhost:3000/dodoc/ownerdic');
      });
      /*
      it('has expected state on load', () => 
         { cy.window()
             .its('store')
             .invoke('getState')
             .should('deep.equal', 
                    initState
             )
      });
        
      */

    it('Page brief welcome', () => {
        cy.contains("СПРАВОЧНИК НАШИХ ФИРМ:");
    });   

    it('Selector displays the list of owner companies', () => {
        cy.get('#ownerDicSelector');
        cy.get('select').select('ООО УКИ').should('have.value', 'OOO UKI');
        cy.get('select').select('ИП Попов').should('have.value', 'IP Popov');
        //cy.get('selector').select('ООО УКИ');  
      //cy.get('#beerPicLog').contains('+ - - - - - -');    
      //cy.get('#hateButton').contains('Hate');
      //cy.get('#loveButton').contains('Love');
    });    
        
            

    /*
      it('contains link to a gallery', () => {
        cy.contains('GO TO GALLERY');
      });
      it('successfully loads gallery page', () => {
        cy.contains('GO TO GALLERY').click();
        cy.url().should('include', '/gallery');
      });    
    */
});
