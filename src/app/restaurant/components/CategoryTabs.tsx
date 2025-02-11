'use client'
import React, { useState, useLayoutEffect } from 'react'
import { getCategories } from '../services/actions'
import styled from 'styled-components'
import { CommonType } from '@/app/global/types/StyledType'

const StyledNav = styled.nav<CommonType>``

const CategoryTabs = ({ categories, onClick }) => {
  const [items, setItems] = useState<string[]>()

  useLayoutEffect(() => {
    ;(async () => {
      const data = await getCategories()
      setItems(data)
    })()
  }, [])

  return <StyledNav></StyledNav>
}

export default React.memo(CategoryTabs)
