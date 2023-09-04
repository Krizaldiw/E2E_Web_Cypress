describe('PrivySign Web Testing E2E', () => {
    it('Access Dashboard PrivySign - Settings', () => {
      // Mengunjungi halaman PrivySign
      cy.visit('https://privy.id/id/privysign');
  
      // Mencari elemen tombol "Masuk" dan mengklik elemen pertama
      cy.get('.d-none > .fa-nav__link > .fa-nav__text').first().click();
  
      // Memeriksa apakah pengguna diarahkan ke halaman login OAuth
      cy.url().should('eq', 'https://oauth.privy.id/login');
    
      // Masukkan PrivyID
      cy.get('#__BVID__4').type('MKR5159');
    
      // Klik tombol "CONTINUE" (saya mengasumsikan tombol ini memiliki teks "CONTINUE")
      cy.get('#tag-lg001:contains("CONTINUE")').click();
    
      // Masukkan password
      cy.get('#__BVID__4').type('Gr!y4s4k!n4ho6');
    
      // Klik tombol "CONTINUE" lagi
      cy.get('#tag-lg001:contains("CONTINUE")').click();
    
      // Memeriksa apakah berhasil masuk ke dashboard
      cy.url().should('eq', 'https://app.privy.id/dashboard');

      // Klik profil
      cy.get('#v-step-3__BV_button_ > .text-right').click();

      // Klik pengaturan (setting)
      cy.get('.mr-3 > .text-300').click();

      // Memeriksa apakah pengguna diarahkan ke halaman pengaturan informasi pribadi
      cy.url().should('eq', 'https://app.privy.id/settings/personal-information');

      // Klik profil
      cy.get('#v-step-3__BV_button_ > .text-right').click();

      //Klik Logout Akun
      cy.get('[href="#"] > .text-300').click()
    });  
  });
  