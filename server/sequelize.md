# sequelize常用方法
>orm并不会帮我们创建数据库中的表 它只是一种表映射 使我们可以使用对象的方式来使用数据库语句
## sequelize字段描述
- type:字段类型 String|Datatypes
- allowNull:是否允许为空，默认为true
- defaultValue:默认值，默认为null
- unique: 值唯一，默认为false
- primaryKey: 是否为主键 默认为false
- field: 数据库中字段是实际名
- autoIncrement: 是否自增，默认false
> 模型类 -> 表 模型创建出来的对象 -> 表中的某条记录

### 创建一个表记录
``` javascript

let user = UserModel.build({
  //字段对应名称
  username: 'xjh',
  age: 24,
  gender: '男'
})
//通过new或者build出来的对象不会立即同步到数据库中需要通过实例的sava来保存
await user.save()
```

### 修改一个表记录

``` javascript
// update == set和save操作
let wyx = UserModel.findById(1)
await wyx.update({
  age: 8
})
```
### 删除一个表记录
模型对象.destroy()
### 查询一个表记录，全部表记录
```javascript
let wyx = UserModel.findOne({
  where: {
    name: 'wyx'
  }
})
let wyx = UserModel.findAll();
// 返回一个数组
// 
// 模型.findAll(findOptions: Obecjt)
// findOptions.where 查询条件
// findOptions.limit 记录条数限制
// findOptions.offset 记录偏移
// findOptions.order 记录排序方式
// findAndCountAll(findOptions:Object) 与findAll类似不过返回值包含数据与总数据
```
### 多条件查询
```javascript
// 单条件
let wyx = await UserModel.findAll({
  where: {
    name: {
      [Sequelize.Op.eq]: '王烨鑫'
    }
    /*
    age: {
      [Sequelize.Op.gte]: 8
    }
    */
  }
})

  let wyx = await UserModel.findAll({
    where: {
      // 多条件
      [Sequelize.Op.or]: [
        {
          name: {
            [Sequelize.Op.eq]: '王烨鑫'
          }
        },
        {
          age: {
            [Sequelize.Op.gte]: 8
          },
          gender: '女'
        }
      ]
    }
  })
  // 带条件的查询年龄总和
  let rs = await UserModel.sum('age', {
    where: {
      gender: '男'
    }
  })

```
### 关联查询
 1. HasOne: model1.hasOne(model2)
 2. HasMany: model1.hasMany(model2)
3. BelongsTo: model1.belongsTo(model2)
4. BelongsToMany: model1.belongsToMany(model2)
- 首先要给关联的字段设置外键关系
- 
