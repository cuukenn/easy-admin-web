export const rules = {
  directory: {
    parentId: [{ required: true, message: '请输入菜单父节点', trigger: 'blur' }],
    name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
    number: [{ required: true, message: '请输入菜单顺序', trigger: 'blur' }],
    routerPath: [{ required: true, message: '请输入菜单路由', trigger: 'blur' }],
    type: [{ required: true, message: '请输入菜单类型', trigger: 'blur' }],
  },
  menu: {
    parentId: [{ required: true, message: '请输入菜单父节点', trigger: 'blur' }],
    name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
    number: [{ required: true, message: '请输入菜单顺序', trigger: 'blur' }],
    routerPath: [{ required: true, message: '请输入菜单路由', trigger: 'blur' }],
    type: [{ required: true, message: '请输入菜单类型', trigger: 'blur' }],
  },
  button: {
    parentId: [{ required: true, message: '请输入菜单父节点', trigger: 'blur' }],
    name: [{ required: true, message: '请输入菜单名称', trigger: 'blur' }],
    number: [{ required: true, message: '请输入菜单顺序', trigger: 'blur' }],
    type: [{ required: true, message: '请输入菜单类型', trigger: 'blur' }],
  },
}
