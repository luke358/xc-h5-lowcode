import React, { useState } from 'react'
import { DeleteOutlined, DownloadOutlined, PlayCircleOutlined, QrcodeOutlined, RedoOutlined, UndoOutlined, UploadOutlined } from '@ant-design/icons'
import type { ThemeConfig } from 'antd'
import { Avatar, Button, Form, Popover, Select, Space, message, theme } from 'antd'
import { HexColorPicker } from 'react-colorful'
import useTheme from 'src/store/useTheme'
import { useLocalStorageState } from 'ahooks'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import useEditor, { useTemporalStore } from 'src/store/useEditor'
import { ControlItem, HeaderControl, HeaderExtra, HeaderLogo, HeaderWrap, ScrollForm } from './styled'
const { useToken } = theme
export default function Header() {
  const [open, setOpen] = useState(false)
  const editorData = useEditor(state => state.editorData)
  const changeTheme = useTheme(state => state.changeTheme)
  const [localTheme, changeLocalTheme] = useLocalStorageState<ThemeConfig>('theme')

  const { undo, redo } = useTemporalStore(state => state)
  const clear = useEditor(state => state.clear)
  const { token } = useToken()

  const onChange = (newColor: string) => {
    const theme = { token: { colorPrimary: newColor } }
    changeTheme(theme)
    changeLocalTheme({ ...localTheme, ...theme })
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
          <div>
            <UploadOutlined />
            <div>导入JSON</div>
          </div>
        </ControlItem>

        <ControlItem>
          <CopyToClipboard text={JSON.stringify(editorData, null, 2)}
            onCopy={() => message.success('已复制到剪贴板')}>
            <div>
              <DownloadOutlined />
              <div>导出JSON</div>
            </div>
          </CopyToClipboard>
        </ControlItem>

        <ControlItem>
          <div>
            <QrcodeOutlined />
            <div>真机预览</div>
          </div>
        </ControlItem>

        {/* <ControlItem>
          <Popover placement="bottom" content={'导出json'}>
            <CopyOutlined />
          </Popover>
        </ControlItem> */}

        <ControlItem>
          <div onClick={() => undo()}>
            <UndoOutlined />
            <div>撤销</div>
          </div>

        </ControlItem>

        <ControlItem>
          <div onClick={() => redo()}>
            <RedoOutlined />
            <div>重做</div>
          </div>
        </ControlItem>

        <ControlItem>
          <div onClick={() => clear()}>
            <DeleteOutlined />
            <div>清空</div>
          </div>
        </ControlItem>

        <ControlItem>
          <div>
            <PlayCircleOutlined />
            <div>预览</div>
          </div>
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
          <Popover content={<HexColorPicker color={token.colorPrimary} onChange={onChange} />}>
            <Avatar className="cursor-pointer" style={{ backgroundColor: token.colorPrimary }}>主题</Avatar>
          </Popover>
          <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></Avatar>
        </Space>
      </HeaderExtra>
    </HeaderWrap>
  )
}
