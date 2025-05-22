const UserService = require('../service/user.service');

class UserController {
  async createLead(req, res, next) {
    try {
      const result = await UserService.createLead(req.body);
      res.status(200).json({
        status_code: 200,
        success: true,
        message: result.message
      });
    } catch (error) {
      next(error);
    }
  }
  async getLeadsSorted(req, res, next) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      
      const { leads, totalCount } = await UserService.getAllLeadsSorted(page, limit);
      
      res.status(200).json({
        status_code: 200,
        success: true,
        data: leads,
        pagination: {
          total: totalCount,
          page,
          limit,
          pages: Math.ceil(totalCount / limit),
        },
      });
    } catch (error) {
      next(error);
    }
  }
  async downloadLeads(req, res, next) {
    try {
      const leads = await UserService.getAllLeads();
      // Set headers to force download JSON file
      res.setHeader('Content-Disposition', 'attachment; filename=leads.json');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(JSON.stringify(leads, null, 2));
    } catch (error) {
      next(error);
    }
  }

}

module.exports = UserController;

