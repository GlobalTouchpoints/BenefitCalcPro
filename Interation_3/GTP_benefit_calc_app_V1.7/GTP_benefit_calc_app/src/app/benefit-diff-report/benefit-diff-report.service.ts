import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { BenefitReport }  from '../shared/benefit-report';
import { BaseService }  from '../shared/base.service';

@Injectable()
export class BenefitDiffReportService extends BaseService {
      getLastBenefitReportByYearMonth(yearMonth: string):  Observable<Array<BenefitReport>> {
        
        let path = this.getRestURL() + '/rest/benefitReports/getLastBenefitReportByYearMonth?yearMonth=' + yearMonth;
        console.log('RestURL: ' + this.getRestURL());
        console.log('path-1: ' + path);   
                                   
        let benefitReports = this.getHttp().get(path, {headers: this.getHeaders()})
                        .map(this.extractData).catch(this.handleError);
        return benefitReports;
      }
}