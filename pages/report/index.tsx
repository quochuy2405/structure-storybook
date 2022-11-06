import Layouts from 'layouts'
import ReportPage from '@/components/templates/ReportPage'
import React, { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const Report: NextPageWithLayout = () => {
  return <ReportPage />
}

Report.getLayout = function getLayout(page: ReactElement) {
  return <Layouts>{page}</Layouts>
}
export default Report
