import {
    SearchOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Input, Menu, Tooltip } from 'antd';
import Image from 'next/image';

const menuItems = [
    'Danh mục',
    'Bán & Xuất hàng',
    'Mua & Nhập hàng',
    'Kho & Sản xuất',
    'Kế toán',
    'Báo cáo & Thống kê',
    'Tiện ích',
];

export function Header() {
    return (
        <div className="flex items-center px-14 py-2 bg-[#003da0] text-white shadow space-x-5">
            <Image
                src="/assets/icons/Logo.svg"
                alt="Logo"
                width={83}
                height={32}
                className="cursor-pointer"
            />
            <Menu
                mode="horizontal"
                className="!bg-[#003da0] !font-lexend border-none"
                style={{ flex: 1, minWidth: 0 }}
                items={menuItems.map((label, index) => ({
                    key: index,
                    label,
                    className: '!text-white  hover:text-blue-300 !px-4',
                }))}
            />
            <Input
                className="w-52 text-white !bg-white/20 backdrop-blur-sm placeholder:text-white border-none"
                placeholder="Tìm kiếm"
                prefix={<SearchOutlined />}
                allowClear
            />
            <Tooltip title="Cài đặt">
                <Image
                    src="/assets/icons/Gear.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </Tooltip>
            <Tooltip title="Convert">
                <Image
                    src="/assets/icons/Convertshape.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </Tooltip>
            <Tooltip title="Tin nhắn">
                <Image
                    src="/assets/icons/Message.svg"
                    alt="Logo"
                    width={20}
                    height={20}
                    className="cursor-pointer"
                />
            </Tooltip>
            <Tooltip title="Thông báo">
                <div className="mt-1">
                    <Badge count={5} offset={[0, 0]}>
                        <Image
                            src="/assets/icons/Vector.svg"
                            alt="Logo"
                            width={18}
                            height={18}
                            className="cursor-pointer"
                        />
                    </Badge>
                </div>
            </Tooltip>
            <Tooltip title="Trợ giúp">
                <Image
                    src="/assets/icons/Question.svg"
                    alt="Logo"
                    width={25}
                    height={25}
                    className="cursor-pointer"
                />
            </Tooltip>
            <Avatar
                size="large"
                icon={(
                    <Image
                        src="/assets/icons/Avatar.svg"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="cursor-pointer"
                    />
                )}
                className="cursor-pointer"
            />
        </div>
    );
}
