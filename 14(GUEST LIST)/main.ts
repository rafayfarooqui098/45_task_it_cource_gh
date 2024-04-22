class Guest {
    constructor(public name: string) {}
    
    sendInvitation() {
      console.log(`Dear ${this.name},\n\nI hope this message finds you well. You are cordially invited to dinner at my humble abode. It would be an honor to have your esteemed presence among us. Your insights and contributions have left an indelible mark on the world, and I believe our gathering would be enriched by your presence.\n\nPlease let me know at your earliest convenience if you can attend.\n\nWarm regards,\n[Your Name]`);
    }
  }
  
  // Creating guest instances
  const rabi = new Guest("rabi");
  const shahzaib = new Guest("shahzaib");
  const bilal = new Guest("bilal");
  
  // Sending invitations
  rabi.sendInvitation();
  shahzaib.sendInvitation();
  bilal.sendInvitation();
  
