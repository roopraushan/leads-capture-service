const Lead = require('../modal/user.modal');  // adjust path accordingly

class UserRepository {
  async createLead(leadData) {
    try {
      const newLead = new Lead(leadData);
      const savedLead = await newLead.save();
      return savedLead;
    } catch (error) {
      console.error('Error creating lead:', error);
      throw new Error('Failed to create lead. Please try again later.');
    }
  }

  async getAllLeadsSorted(page, limit) {
    const skip = (page - 1) * limit;
    const leads = await Lead.find()
      .sort({ createdAt: -1 }) // newest first
      .skip(skip)
      .limit(limit);
  
    const totalCount = await Lead.countDocuments();
  
    return { leads, totalCount };
  }
  
  async getAllLeads() {
    try {
      return await Lead.find();
    } catch (error) {
      console.error('Error fetching all leads:', error);
      throw new Error('Failed to fetch leads from DB');
    }
  }
}

module.exports = new UserRepository();
