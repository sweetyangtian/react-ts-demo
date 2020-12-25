import React from 'react'
import './index.less'

interface IProps {
	type: string
}

function MIcon(props: IProps) {
	const { type } = props
	return <span className={`icon iconfont icon-${type}`}>我是图标-{type}</span>
}

export default MIcon
