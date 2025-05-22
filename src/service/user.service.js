const UserRepository = require('../repository/user.repository');



class UserService {
  async createLead(leadData) {
    try {
      const lead = await UserRepository.createLead(leadData);
      return { message: 'Lead created successfully.', data: lead };
    } catch (error) {
      // Log or handle error as needed
      throw new Error(`Failed to create lead: ${error.message}`);
    }
  }

  async getAllLeadsSorted(page , limit ) {
    try {
      return await UserRepository.getAllLeadsSorted(page, limit);
    } catch (error) {
      throw new Error(`Failed to get leads: ${error.message}`);
    };
  }
  async getAllLeads() {
    try {
      return await UserRepository.getAllLeads();
    } catch (error) {
      throw new Error(`Failed to get all leads: ${error.message}`);
    }
  }
}

module.exports = new UserService();

  