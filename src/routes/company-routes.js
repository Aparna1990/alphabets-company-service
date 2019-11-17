const CompanyRouteHandler = require('./company-route-handler');
class Routes { 
    constructor(configs, dependencies) { 
        this.companyRouteHandler = new CompanyRouteHandler(configs, dependencies);
    }
    
    registerRoutes(server) { 
        server.post('/company', (req, res) => this.companyRouteHandler.addCompany(req, res));
        server.get('/company', (req, res) => this.companyRouteHandler.getCompanies(req, res));
        server.delete('/company/:id', (req, res) => this.companyRouteHandler.deletecompany(req, res));
    }
}

module.exports = Routes;