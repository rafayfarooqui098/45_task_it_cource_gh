class Guest {
    constructor(public name: string) {}
    
    sendInvitation() {
      console.log(`Dear ${this.name},\n\nI hope this message finds you well. You are cordially invited to dinner at my humble abode. It would be an honor to have your esteemed presence among us. Your insights and contributions have left an indelible mark on the world, and I believe our gathering would be enriched by your presence.\n\nPlease let me know at your earliest convenience if you can attend.\n\nWarm regards,\n[Your Name]`);
    }
  }
  
  // Creating guest instances
  const albertEinstein = new Guest("Albert Einstein");
  const mayaAngelou = new Guest("Maya Angelou");
  const leonardoDaVinci = new Guest("Leonardo da Vinci");
  
  // Sending invitations
  albertEinstein.sendInvitation();
  mayaAngelou.sendInvitation();
  leonardoDaVinci.sendInvitation();

  // Updating the guest list by replacing one guest
const newGuest = new Guest("Marie Curie");

// Sending out new invitations
newGuest.sendInvitation();

// Creating instances for three new guests
const isaacNewton = new Guest("Isaac Newton");
const janeAusten = new Guest("Jane Austen");
const nelsonMandela = new Guest("Nelson Mandela");

// Sending invitations to the new guests
isaacNewton.sendInvitation();
janeAusten.sendInvitation();
nelsonMandela.sendInvitation();
