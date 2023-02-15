import {
  AiFillCode,
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineBold,
  AiOutlineOrderedList,
  AiOutlineUnderline
} from 'react-icons/ai'
import { BiHeading, BiLinkAlt } from 'react-icons/bi'
import { CgDetailsLess, CgDetailsMore } from 'react-icons/cg'
import { FiItalic } from 'react-icons/fi'
import { GoTextSize } from 'react-icons/go'
import { IoImagesOutline } from 'react-icons/io5'
import { MdTextFields } from 'react-icons/md'

export const FORMAT_NEW_SECTION = {
  HEADING: { name: 'Heading', content: '', type: 'heading' },
  PART: { name: 'Part Title', content: '', type: 'part' },
  DESCRIPTION: {
    name: 'Description ',
    content: '',
    type: 'desc'
  },
  CODE: { name: 'Code', content: '', type: 'code' },
  TEXT: { name: 'Content ', content: '', type: 'text' },
  LIST: { name: 'List', content: '', type: 'list' },
  IMAGE: { name: 'Image ', content: '', type: 'image' },
  URL: { name: 'URL Link', content: '', url: 'https://example', type: 'url' }
}

export const ButtonFormats = [
  { key: 'bold', value: '800', icon: <AiOutlineBold size={20} /> },
  { key: 'italic', value: '', icon: <FiItalic size={20} /> },
  { key: 'under', value: '', icon: <AiOutlineUnderline size={20} /> },
  { key: 'size', value: '4', icon: <GoTextSize size={20} /> }
]
export const ButtonAligns = [
  { key: 'start', value: 'start', icon: <AiOutlineAlignLeft size={20} /> },
  { key: 'center', value: 'center', icon: <AiOutlineAlignCenter size={20} /> },
  { key: 'end', value: 'end', icon: <AiOutlineAlignRight size={20} /> }
]

export const ButtonNewSections = [
  { title: 'Heading', key: 'heading', icon: <BiHeading size={18} /> },
  { title: 'Part Title', key: 'part', icon: <MdTextFields size={18} /> },
  { title: 'Description', key: 'description', icon: <CgDetailsLess size={18} /> },
  { title: 'URL', key: 'url', icon: <BiLinkAlt size={18} /> },
  { title: 'Long Text', key: 'text', icon: <CgDetailsMore size={18} /> },
  { title: 'Script Code', key: 'code', icon: <AiFillCode size={18} /> },
  { title: 'Ordered List', key: 'list', icon: <AiOutlineOrderedList size={18} /> },
  { title: 'Image', key: 'image', icon: <IoImagesOutline size={18} /> }
]

export const colors = [
  '#3fcf8e',
  '#ff9d09',
  '#850000',
  '#FF597B',
  '#FB2576',
  '#EB6440',
  '#3A8891',
  '#474E68'
]
