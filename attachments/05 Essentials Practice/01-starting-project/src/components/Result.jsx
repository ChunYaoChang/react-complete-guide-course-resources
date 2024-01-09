import { calculateInvestmentResults, formatter } from "../util/investment";

export function Result({ userInput }) {
  const annualData = calculateInvestmentResults(userInput);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].annualInvestment - annualData[0].interest
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((rowData) => {
          const totalInterstValue = rowData.valueEndOfYear - rowData.annualInvestment * rowData.year - initialInvestment;
          const investedCapital = rowData.valueEndOfYear - totalInterstValue;
          return (
            <tr key={rowData.year}>
              <td>{rowData.year}</td>
              <td>{formatter.format(rowData.valueEndOfYear)}</td>
              <td>{formatter.format(rowData.interest)}</td>
              <td>{formatter.format(totalInterstValue)}</td>
              <td>{formatter.format(investedCapital)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
