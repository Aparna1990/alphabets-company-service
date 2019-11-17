const Company = require('../schema/company');
class CompanyManager{
    constructor(configs, dependencies){
    }

    async addCompany(req, res){
        
            const company = new Company({
                companyName: req.body.company_name,
                firstName: req.body.user_first_name,
                emailId: req.body.email_id,
                mobileNumber: req.body.mobile_number,
                createdBy: req.body.created_by
        }) ;
        try{ 
        let result = await company.save();
            res.status(201).send(result);
        }
        catch(e){
            res.status(400).send(e);
            throw e;
        }
    }
    async getCompanies(req, res){
        try{
            let result = await Company.find();
            res.status(200).send(result);
        }
        catch(e){
            res.status(500).json({ message: e.message })
            throw e;
        }
    }
    async deletecompany(req, res){
        try{
            let company = await Company.findByIdAndDelete(req.params.id);
            res.status(200).send({message: "deletion successful"});
        }
        catch(e){
            res.status(500).json({ message: e.message })
            throw e;
        }
    }
}
module.exports = CompanyManager;