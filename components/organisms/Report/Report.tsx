import { Button } from '@/components/atoms'
import clsx from 'clsx'
import React from 'react'
import Styles from './Report.module.scss'
export type RowsItem = {
  id: string
  isParent?: boolean
  displayName: string
  ms: string
  sm: string
  datePost: string
  dateRealize: string
}

export interface IReportProps {
  headers: Array<string>
  rowItems: Array<RowsItem>
  reportName?: string
  companyName?: string
  className?: string
}

const Report: React.FC<IReportProps> = ({
  headers = [],
  rowItems = [],
  companyName,

  reportName = 'BÁO CÁO TÀI CHÍNH',
  className
}) => {
  const classNames = clsx(Styles.Report, { [className as string]: className })
  return (
    <div className={classNames}>
      <div className={Styles.HeadReport}>
        <div className={Styles.Title}>
          <p className={Styles.ReportName}>{reportName}</p>
          <p className={Styles.CompanyName}>{companyName}</p>
        </div>
        <div className={Styles.LocalDate}>TpHCM,ngày 28 tháng 09 năm 2022 </div>
      </div>
      <div className={Styles.Notice}>
        <p>Hãy đảm bảo thông tin chính xác</p>
      </div>
      <table className={Styles.BodyReport}>
        <thead>
          <tr className={Styles.Headers}>
            {headers.map((item) => (
              <th key={item} className={Styles.Header}>
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className={Styles.RowsReport}>
          {rowItems.map((item) => (
            <tr
              key={item.id}
              className={`${Styles.rowItem} ${
                item.isParent && Styles.parentPart
              }`}
            >
              {Object.keys(item).map(
                (key) =>
                  key !== 'id' &&
                  key !== 'keyName' &&
                  key !== 'isParent' && (
                    <p key={key}>{item[key as keyof typeof item]}</p>
                  )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={Styles.ButtonConfirm}>
        <Button title="Xác nhận báo cáo" type="submit" mode="primary" />
      </div>
    </div>
  )
}

export default Report
