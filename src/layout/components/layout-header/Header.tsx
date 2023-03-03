import { CopyOutlined, DeleteOutlined, DownloadOutlined, PlayCircleOutlined, RedoOutlined, UndoOutlined, UploadOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Popover, Select, Space, theme } from 'antd'
import type { AliasToken } from 'antd/es/theme/internal'
import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import useTheme from 'src/store/useTheme'
import { useLocalStorageState } from 'ahooks'

import { ControlItem, HeaderControl, HeaderExtra, HeaderLogo, HeaderWrap, ScrollForm } from './styled'
const { useToken } = theme
export default function Header() {
  const [open, setOpen] = useState(false)
  const changeTheme = useTheme(state => state.changeTheme)
  const [localTheme, changeLocalTheme] = useLocalStorageState<any>('theme')

  const { token } = useToken()
  const [color, setColor] = useState(token.colorPrimary)

  const onChange = (newColor: string) => {
    setColor(newColor)
    changeTheme({ colorPrimary: newColor } as AliasToken)
    changeLocalTheme({ ...localTheme, colorPrimary: newColor })
  }
  const hide = () => {
    setOpen(false)
  }

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen)
  }

  return (
    <HeaderWrap>
      <HeaderLogo>logo</HeaderLogo>
      <HeaderControl>
        <ControlItem>
          <Popover placement="bottom" content={'导入json'}>
            <UploadOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'导出json'}>
            <DownloadOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'导出json'}>
            <CopyOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'撤销'}>
            <UndoOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'重做'}>
            <RedoOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'清空'}>
            <DeleteOutlined />
          </Popover>
        </ControlItem>

        <ControlItem>
          <Popover placement="bottom" content={'预览'}>
            <PlayCircleOutlined />
          </Popover>
        </ControlItem>

      </HeaderControl>
      <HeaderExtra>
        <Space align="center" size={'middle'}>
          <Popover
            content={<ScrollForm>
              <div className=" mb-14">
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="布局模式">
                  <Select>
                    <Select.Option value="demo">Demo</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <Form.Item className=" center absolute bottom-0 w-72 mb-2">
                <Button block type="primary" onClick={hide}>保存</Button>
              </Form.Item>
            </ScrollForm>}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button type="primary" ghost>页面设置</Button>
          </Popover>
          <Popover content={<HexColorPicker color={color} onChange={onChange} />}>
            <Avatar className="cursor-pointer" style={{ backgroundColor: color }}>主题</Avatar>
          </Popover>
          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Avatar>
        </Space>
      </HeaderExtra>
    </HeaderWrap>
  )
}
