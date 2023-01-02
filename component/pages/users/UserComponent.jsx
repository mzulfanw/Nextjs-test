import React from 'react'
import Layout from '@/component/core/Layout'
import PropTypes from 'prop-types'
import Card from '@/component/shared/Card'
import { useRouter } from 'next/router'
import Pagination from '@/component/shared/Pagination'

function UserComponent({
  data,
  pageActive
}) {
  const router = useRouter()

  const pagination = {
    page: data?.page,
    per_page: data?.per_page,
    total: data?.total,
    total_pages: data?.total_pages
  }

  const handleChangePage = (params) => {
    router.push(`/users/${params.id}`, null, { shallow: true })
  }

  const handlePagination = (page) => {
    router.push(`/users?page=${page}&=per_page=${4}`, null, { shallow: true })
  }

  return (
    <Layout>
      <section>
        <div
          className='flex justify-center flex-wrap items-center gap-10 mb-10'
        >
          {
            data?.data?.length > 0 && (
              data?.data?.map((item, index) => (
                <div
                  key={index}
                  className='w-full md:w-1/3 cursor-pointer border-4 border-double border-red-800 rounded-tl-3xl rounded-br-3xl'
                  onClick={() => { handleChangePage(item) }}
                >
                  <Card
                    name={`${item.first_name} ${item.last_name}`}
                    path={item.avatar}
                  />
                </div>
              ))
            )
          }
          {
            data?.data?.length === 0 && (
              <p>Empty</p>
            )
          }
        </div>
        <Pagination
          pagination={pagination}
          handlePagination={handlePagination}
          pageActive={pageActive}
        />
      </section>
    </Layout>
  )
}

UserComponent.propTypes = {
  data: PropTypes.object,
  pageActive: PropTypes.string
}

export default UserComponent