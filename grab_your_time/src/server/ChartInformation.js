class ChartInformation {
    constructor(){
        this.chartInformationList ;
    }

    CalculateTotialTime(typeList){
        this.chartInformationList = typeList;
        return this.chartInformationList
    }
}

module.exports = ChartInformation;