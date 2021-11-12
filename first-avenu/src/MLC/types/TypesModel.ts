import BankAccountType from '../types/BankAccountType';
import BankAccountVerificationType from '../Types/BankAccountVerificationType';
import CheckStatus from '../Types/CheckStatus';
import CustomerReferenceType from '../Types/CustomerReferenceType';
import CustomerStatusType from '../Types/CustomerStatusType';
import DocumentStatusType from '../Types/DocumentStatusType';
import EmploymentType from '../Types/EmploymentType';
import IncomeType from '../Types/IncomeType';
import LoanAutoPayType from '../Types/LoanAutoPayType';
import LoanType from '../Types/LoanType';
import PettyCashType from '../Types/PettyCashType';

export default interface TypesModel {
  CheckStatuses: CheckStatus[];
  PettyCashes: PettyCashType[];
  CustomerStatuses: CustomerStatusType[];
  Incomes: IncomeType[];
  Employments: EmploymentType[];
  CustomerReferences: CustomerReferenceType[];
  BankAccounts: BankAccountType[];
  BankAccountVerifications: BankAccountVerificationType[];
  AutoPays: LoanAutoPayType[];
  Loans: LoanType[];
  DocumentStatuses: DocumentStatusType[];
}
