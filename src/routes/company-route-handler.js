const CompanyManager = require('../manager/company-manager');
class CompanyRouteHandler{
    constructor(configs, dependencies){
        this.companyManager = new CompanyManager(configs, dependencies);
    }
    async addCompany(req, res){
        let result = this.companyManager.addCompany(req, res);
        return result;
    }
    async getCompanies(req, res){
        console.log("isnide get");
        let result = await this.companyManager.getCompanies(req, res);
        return result;
    }
    async deletecompany(req, res){
        let result = this.companyManager.deletecompany(req, res);
        return result;
    }

}
module.exports = CompanyRouteHandler;