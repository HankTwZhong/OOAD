class ChartInformation {
    constructor(){
        this.chartInformationList ;
    }

    filterTypeList(typeList,  startDate, endDate){
        typeList.eventList.forEach((event)=>{
            if (event.start > startDate && event.start < endDate)
                this.chartInformationList.push();
        })
    }
    CalculateTotialTime(typeList, startDate, endDate){
        this.chartInformationList = typeList;
        // let measureHour = (this.chartInformationList.eventList[0].end - this.chartInformationList.eventList[0].start)/3600000 ;
        this.chartInformationList.eventList.forEach((event)=>{
            event.countTime = (event.end - event.start) / 3600000;
            console.log(event.countTime);
        })
        return this.chartInformationList;
    }
}

module.exports = ChartInformation;