import { CopyOutlined, DeleteOutlined, DownloadOutlined, PlayCircleOutlined, RedoOutlined, UndoOutlined, UploadOutlined } from '@ant-design/icons'
import { Avatar, Button, Form, Popover, Select, Space } from 'antd'
import React, { useState } from 'react'
import { ControlItem, HeaderControl, HeaderExtra, HeaderLogo, HeaderWrap, ScrollForm } from './styled'

export default function Header() {
  const [open, setOpen] = useState(false)

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
              <Form.Item className=" center absolute bottom-0 w-72 mb-4">
                <Button className="w-full" type="primary">保存</Button>
              </Form.Item>
            </ScrollForm>}
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button type="primary" ghost>页面设置</Button>
          </Popover>
          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Avatar>
        </Space>
      </HeaderExtra>
    </HeaderWrap>
  )
}
