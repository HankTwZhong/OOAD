class fakeDB {
    static findOneAndUpdate(fake1, fake2, fake3){
        return new Promise((resolve, reject)=>{
            let result = {
                typeList:[{
                    typeName:'OOAD',
                    eventList: fake2.$set['typeList.$.eventList']
                }]
            };
            resolve(result);
        })
    }
    static update(fake1, fake2, fake3){
        let result = {
            _id:'8081'
        }
        return new Promise((resolve, reject)=>{
            resolve("Update Success");
        })
    }
}

module.exports = fakeDB;