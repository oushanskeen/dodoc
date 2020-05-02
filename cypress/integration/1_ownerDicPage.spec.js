const initState =  
    {
        "currentDic":"some dic",
        "dics": 
            [
                { id:0, name:"ООО УКИ"},
                { id:1, name:"ИП Попов"}
            ]
    };

describe('Unit tests general /ownerdic route conditions',()=>{
   context("The OwnerDic Page", ()=>{
        beforeEach(()=> {
            cy.visit('http://localhost:3000/dodoc/ownerdic');
    });
    
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/dodoc/ownerdic');
    });

    it('has expected state on load', () => 
        { cy.window()
            .its('store')
            .invoke('getState')
            .its('ownerDic')
            .should('deep.equal', initState)
        }
    );
    
    it('Page brief welcome', () => {
        cy.contains("СПРАВОЧНИК НАШИХ ФИРМ:");
    });
    
});

describe("Unit tests onwerdics selector",()=>{
    it('OwnerDicSelector displays the list of owner companies', () => {
        cy.get('#ownerDicSelector').select('ООО УКИ').should('have.value','ООО УКИ');
        cy.get('#ownerDicSelector').select('ИП Попов').should('have.value','ИП Попов');
    });
});

describe("Unit tests dogdics selector",()=>{
    it('DogDicSelector displays the list of dogovor types', () => {
        cy.get('#dogDicSelector').select('ЮЛ').should('have.value','ЮЛ');
        cy.get('#dogDicSelector').select('ИП').should('have.value','ИП');
        cy.get('#dogDicSelector').select('ФЛ').should('have.value','ФЛ');
    });
});

    

        
        

           

        /*
        it('OwnerDicSelector displays the list of owner companies', () => {
            cy.get('#ownerDicSelector');
            cy.get('select').select('ИП Попов').should('have.value','ИП Попов');
        });
        */
        //it('DogDicSelector displays the list of owner companies', () => {
        //    cy.get('#dogDicSelector');
        //});
    
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
