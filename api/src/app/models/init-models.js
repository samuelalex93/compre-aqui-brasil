var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _anunciante_anunciante = require("./anunciante_anunciante");
var _anunciante_categoria = require("./anunciante_categoria");
var _anuncio_avaliacao = require("./anuncio_avaliacao");
var _anuncio_cartaodigital = require("./anuncio_cartaodigital");
var _anuncio_contato = require("./anuncio_contato");
var _anuncio_descricao = require("./anuncio_descricao");
var _anuncio_facilidade = require("./anuncio_facilidade");
var _anuncio_favorito = require("./anuncio_favorito");
var _anuncio_fotoad = require("./anuncio_fotoad");
var _anuncio_funcionamento = require("./anuncio_funcionamento");
var _anuncio_paletadecor = require("./anuncio_paletadecor");
var _anuncio_promocao = require("./anuncio_promocao");
var _anuncio_redesocial = require("./anuncio_redesocial");
var _anuncio_videoyoutube = require("./anuncio_videoyoutube");
var _assinatura_assinatura = require("./assinatura_assinatura");
var _assinatura_plano = require("./assinatura_plano");
var _auditoria_logentry = require("./auditoria_logentry");
var _auth_group = require("./auth_group");
var _auth_group_permissions = require("./auth_group_permissions");
var _auth_permission = require("./auth_permission");
var _cliente_cliente = require("./cliente_cliente");
var _core_consultor = require("./core_consultor");
var _core_operador = require("./core_operador");
var _core_passmaster = require("./core_passmaster");
var _django_admin_log = require("./django_admin_log");
var _django_content_type = require("./django_content_type");
var _django_flatpage = require("./django_flatpage");
var _django_flatpage_sites = require("./django_flatpage_sites");
var _django_migrations = require("./django_migrations");
var _django_session = require("./django_session");
var _django_site = require("./django_site");
var _faturamento_faturapagseguro = require("./faturamento_faturapagseguro");
var _faturamento_notificationpagseguro = require("./faturamento_notificationpagseguro");
var _geo_cidade = require("./geo_cidade");
var _geo_estado = require("./geo_estado");
var _geo_pais = require("./geo_pais");
var _produto_denuncia = require("./produto_denuncia");
var _produto_importacaodeproduto = require("./produto_importacaodeproduto");
var _produto_produto = require("./produto_produto");
var _produto_voucher = require("./produto_voucher");
var _produto_wishlist = require("./produto_wishlist");
var _thumbnail_kvstore = require("./thumbnail_kvstore");
var _usuario_usuario = require("./usuario_usuario");
var _usuario_usuario_groups = require("./usuario_usuario_groups");
var _usuario_usuario_user_permissions = require("./usuario_usuario_user_permissions");
var _vendedor_vendedor = require("./vendedor_vendedor");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var anunciante_anunciante = _anunciante_anunciante(sequelize, DataTypes);
  var anunciante_categoria = _anunciante_categoria(sequelize, DataTypes);
  var anuncio_avaliacao = _anuncio_avaliacao(sequelize, DataTypes);
  var anuncio_cartaodigital = _anuncio_cartaodigital(sequelize, DataTypes);
  var anuncio_contato = _anuncio_contato(sequelize, DataTypes);
  var anuncio_descricao = _anuncio_descricao(sequelize, DataTypes);
  var anuncio_facilidade = _anuncio_facilidade(sequelize, DataTypes);
  var anuncio_favorito = _anuncio_favorito(sequelize, DataTypes);
  var anuncio_fotoad = _anuncio_fotoad(sequelize, DataTypes);
  var anuncio_funcionamento = _anuncio_funcionamento(sequelize, DataTypes);
  var anuncio_paletadecor = _anuncio_paletadecor(sequelize, DataTypes);
  var anuncio_promocao = _anuncio_promocao(sequelize, DataTypes);
  var anuncio_redesocial = _anuncio_redesocial(sequelize, DataTypes);
  var anuncio_videoyoutube = _anuncio_videoyoutube(sequelize, DataTypes);
  var assinatura_assinatura = _assinatura_assinatura(sequelize, DataTypes);
  var assinatura_plano = _assinatura_plano(sequelize, DataTypes);
  var auditoria_logentry = _auditoria_logentry(sequelize, DataTypes);
  var auth_group = _auth_group(sequelize, DataTypes);
  var auth_group_permissions = _auth_group_permissions(sequelize, DataTypes);
  var auth_permission = _auth_permission(sequelize, DataTypes);
  var cliente_cliente = _cliente_cliente(sequelize, DataTypes);
  var core_consultor = _core_consultor(sequelize, DataTypes);
  var core_operador = _core_operador(sequelize, DataTypes);
  var core_passmaster = _core_passmaster(sequelize, DataTypes);
  var django_admin_log = _django_admin_log(sequelize, DataTypes);
  var django_content_type = _django_content_type(sequelize, DataTypes);
  var django_flatpage = _django_flatpage(sequelize, DataTypes);
  var django_flatpage_sites = _django_flatpage_sites(sequelize, DataTypes);
  var django_migrations = _django_migrations(sequelize, DataTypes);
  var django_session = _django_session(sequelize, DataTypes);
  var django_site = _django_site(sequelize, DataTypes);
  var faturamento_faturapagseguro = _faturamento_faturapagseguro(sequelize, DataTypes);
  var faturamento_notificationpagseguro = _faturamento_notificationpagseguro(sequelize, DataTypes);
  var geo_cidade = _geo_cidade(sequelize, DataTypes);
  var geo_estado = _geo_estado(sequelize, DataTypes);
  var geo_pais = _geo_pais(sequelize, DataTypes);
  var produto_denuncia = _produto_denuncia(sequelize, DataTypes);
  var produto_importacaodeproduto = _produto_importacaodeproduto(sequelize, DataTypes);
  var produto_produto = _produto_produto(sequelize, DataTypes);
  var produto_voucher = _produto_voucher(sequelize, DataTypes);
  var produto_wishlist = _produto_wishlist(sequelize, DataTypes);
  var thumbnail_kvstore = _thumbnail_kvstore(sequelize, DataTypes);
  var usuario_usuario = _usuario_usuario(sequelize, DataTypes);
  var usuario_usuario_groups = _usuario_usuario_groups(sequelize, DataTypes);
  var usuario_usuario_user_permissions = _usuario_usuario_user_permissions(sequelize, DataTypes);
  var vendedor_vendedor = _vendedor_vendedor(sequelize, DataTypes);

  anuncio_avaliacao.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_avaliacao, { as: "anuncio_avaliacaos", foreignKey: "anunciante_id"});
  anuncio_cartaodigital.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_cartaodigital, { as: "anuncio_cartaodigitals", foreignKey: "anunciante_id"});
  anuncio_contato.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_contato, { as: "anuncio_contatos", foreignKey: "anunciante_id"});
  anuncio_descricao.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_descricao, { as: "anuncio_descricaos", foreignKey: "anunciante_id"});
  anuncio_facilidade.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_facilidade, { as: "anuncio_facilidades", foreignKey: "anunciante_id"});
  anuncio_favorito.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_favorito, { as: "anuncio_favoritos", foreignKey: "anunciante_id"});
  anuncio_fotoad.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_fotoad, { as: "anuncio_fotoads", foreignKey: "anunciante_id"});
  anuncio_funcionamento.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_funcionamento, { as: "anuncio_funcionamentos", foreignKey: "anunciante_id"});
  anuncio_paletadecor.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasOne(anuncio_paletadecor, { as: "anuncio_paletadecor", foreignKey: "anunciante_id"});
  anuncio_promocao.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(anuncio_promocao, { as: "anuncio_promocaos", foreignKey: "anunciante_id"});
  anuncio_redesocial.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasOne(anuncio_redesocial, { as: "anuncio_redesocial", foreignKey: "anunciante_id"});
  anuncio_videoyoutube.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasOne(anuncio_videoyoutube, { as: "anuncio_videoyoutube", foreignKey: "anunciante_id"});
  assinatura_assinatura.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(assinatura_assinatura, { as: "assinatura_assinaturas", foreignKey: "anunciante_id"});
  produto_importacaodeproduto.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(produto_importacaodeproduto, { as: "produto_importacaodeprodutos", foreignKey: "anunciante_id"});
  produto_produto.belongsTo(anunciante_anunciante, { as: "anunciante", foreignKey: "anunciante_id"});
  anunciante_anunciante.hasMany(produto_produto, { as: "produto_produtos", foreignKey: "anunciante_id"});
  anunciante_anunciante.belongsTo(anunciante_categoria, { as: "categorium", foreignKey: "categoria_id"});
  anunciante_categoria.hasMany(anunciante_anunciante, { as: "anunciante_anunciantes", foreignKey: "categoria_id"});
  faturamento_faturapagseguro.belongsTo(assinatura_assinatura, { as: "assinatura", foreignKey: "assinatura_id"});
  assinatura_assinatura.hasMany(faturamento_faturapagseguro, { as: "faturamento_faturapagseguros", foreignKey: "assinatura_id"});
  assinatura_assinatura.belongsTo(assinatura_plano, { as: "plano", foreignKey: "plano_id"});
  assinatura_plano.hasMany(assinatura_assinatura, { as: "assinatura_assinaturas", foreignKey: "plano_id"});
  auth_group_permissions.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "group_id"});
  usuario_usuario_groups.belongsTo(auth_group, { as: "group", foreignKey: "group_id"});
  auth_group.hasMany(usuario_usuario_groups, { as: "usuario_usuario_groups", foreignKey: "group_id"});
  auth_group_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(auth_group_permissions, { as: "auth_group_permissions", foreignKey: "permission_id"});
  usuario_usuario_user_permissions.belongsTo(auth_permission, { as: "permission", foreignKey: "permission_id"});
  auth_permission.hasMany(usuario_usuario_user_permissions, { as: "usuario_usuario_user_permissions", foreignKey: "permission_id"});
  anuncio_avaliacao.belongsTo(cliente_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente_cliente.hasMany(anuncio_avaliacao, { as: "anuncio_avaliacaos", foreignKey: "cliente_id"});
  anuncio_contato.belongsTo(cliente_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente_cliente.hasMany(anuncio_contato, { as: "anuncio_contatos", foreignKey: "cliente_id"});
  anuncio_favorito.belongsTo(cliente_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente_cliente.hasMany(anuncio_favorito, { as: "anuncio_favoritos", foreignKey: "cliente_id"});
  produto_voucher.belongsTo(cliente_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente_cliente.hasMany(produto_voucher, { as: "produto_vouchers", foreignKey: "cliente_id"});
  produto_wishlist.belongsTo(cliente_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cliente_cliente.hasMany(produto_wishlist, { as: "produto_wishlists", foreignKey: "cliente_id"});
  anunciante_anunciante.belongsTo(core_consultor, { as: "consultor", foreignKey: "consultor_id"});
  core_consultor.hasMany(anunciante_anunciante, { as: "anunciante_anunciantes", foreignKey: "consultor_id"});
  auditoria_logentry.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auditoria_logentry, { as: "auditoria_logentries", foreignKey: "content_type_id"});
  auth_permission.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(auth_permission, { as: "auth_permissions", foreignKey: "content_type_id"});
  django_admin_log.belongsTo(django_content_type, { as: "content_type", foreignKey: "content_type_id"});
  django_content_type.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "content_type_id"});
  django_flatpage_sites.belongsTo(django_flatpage, { as: "flatpage", foreignKey: "flatpage_id"});
  django_flatpage.hasMany(django_flatpage_sites, { as: "django_flatpage_sites", foreignKey: "flatpage_id"});
  django_flatpage_sites.belongsTo(django_site, { as: "site", foreignKey: "site_id"});
  django_site.hasMany(django_flatpage_sites, { as: "django_flatpage_sites", foreignKey: "site_id"});
  faturamento_notificationpagseguro.belongsTo(faturamento_faturapagseguro, { as: "fat", foreignKey: "fat_id"});
  faturamento_faturapagseguro.hasMany(faturamento_notificationpagseguro, { as: "faturamento_notificationpagseguros", foreignKey: "fat_id"});
  anunciante_anunciante.belongsTo(geo_cidade, { as: "cidade", foreignKey: "cidade_id"});
  geo_cidade.hasMany(anunciante_anunciante, { as: "anunciante_anunciantes", foreignKey: "cidade_id"});
  cliente_cliente.belongsTo(geo_cidade, { as: "cidade", foreignKey: "cidade_id"});
  geo_cidade.hasMany(cliente_cliente, { as: "cliente_clientes", foreignKey: "cidade_id"});
  core_consultor.belongsTo(geo_cidade, { as: "cidade", foreignKey: "cidade_id"});
  geo_cidade.hasMany(core_consultor, { as: "core_consultors", foreignKey: "cidade_id"});
  core_operador.belongsTo(geo_cidade, { as: "cidade", foreignKey: "cidade_id"});
  geo_cidade.hasMany(core_operador, { as: "core_operadors", foreignKey: "cidade_id"});
  vendedor_vendedor.belongsTo(geo_cidade, { as: "cidade", foreignKey: "cidade_id"});
  geo_cidade.hasMany(vendedor_vendedor, { as: "vendedor_vendedors", foreignKey: "cidade_id"});
  anunciante_anunciante.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(anunciante_anunciante, { as: "anunciante_anunciantes", foreignKey: "estado_id"});
  cliente_cliente.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(cliente_cliente, { as: "cliente_clientes", foreignKey: "estado_id"});
  core_consultor.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(core_consultor, { as: "core_consultors", foreignKey: "estado_id"});
  core_operador.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(core_operador, { as: "core_operadors", foreignKey: "estado_id"});
  geo_cidade.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(geo_cidade, { as: "geo_cidades", foreignKey: "estado_id"});
  vendedor_vendedor.belongsTo(geo_estado, { as: "estado", foreignKey: "estado_id"});
  geo_estado.hasMany(vendedor_vendedor, { as: "vendedor_vendedors", foreignKey: "estado_id"});
  geo_estado.belongsTo(geo_pais, { as: "pai", foreignKey: "pais_id"});
  geo_pais.hasMany(geo_estado, { as: "geo_estados", foreignKey: "pais_id"});
  produto_denuncia.belongsTo(produto_produto, { as: "produto", foreignKey: "produto_id"});
  produto_produto.hasMany(produto_denuncia, { as: "produto_denuncia", foreignKey: "produto_id"});
  produto_voucher.belongsTo(produto_produto, { as: "produto", foreignKey: "produto_id"});
  produto_produto.hasMany(produto_voucher, { as: "produto_vouchers", foreignKey: "produto_id"});
  produto_wishlist.belongsTo(produto_produto, { as: "produto", foreignKey: "produto_id"});
  produto_produto.hasMany(produto_wishlist, { as: "produto_wishlists", foreignKey: "produto_id"});
  anunciante_anunciante.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(anunciante_anunciante, { as: "anunciante_anunciantes", foreignKey: "user_id"});
  auditoria_logentry.belongsTo(usuario_usuario, { as: "actor", foreignKey: "actor_id"});
  usuario_usuario.hasMany(auditoria_logentry, { as: "auditoria_logentries", foreignKey: "actor_id"});
  cliente_cliente.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(cliente_cliente, { as: "cliente_clientes", foreignKey: "user_id"});
  core_consultor.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(core_consultor, { as: "core_consultors", foreignKey: "user_id"});
  core_operador.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(core_operador, { as: "core_operadors", foreignKey: "user_id"});
  django_admin_log.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(django_admin_log, { as: "django_admin_logs", foreignKey: "user_id"});
  usuario_usuario_groups.belongsTo(usuario_usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario_usuario.hasMany(usuario_usuario_groups, { as: "usuario_usuario_groups", foreignKey: "usuario_id"});
  usuario_usuario_user_permissions.belongsTo(usuario_usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario_usuario.hasMany(usuario_usuario_user_permissions, { as: "usuario_usuario_user_permissions", foreignKey: "usuario_id"});
  vendedor_vendedor.belongsTo(usuario_usuario, { as: "user", foreignKey: "user_id"});
  usuario_usuario.hasMany(vendedor_vendedor, { as: "vendedor_vendedors", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    anunciante_anunciante,
    anunciante_categoria,
    anuncio_avaliacao,
    anuncio_cartaodigital,
    anuncio_contato,
    anuncio_descricao,
    anuncio_facilidade,
    anuncio_favorito,
    anuncio_fotoad,
    anuncio_funcionamento,
    anuncio_paletadecor,
    anuncio_promocao,
    anuncio_redesocial,
    anuncio_videoyoutube,
    assinatura_assinatura,
    assinatura_plano,
    auditoria_logentry,
    auth_group,
    auth_group_permissions,
    auth_permission,
    cliente_cliente,
    core_consultor,
    core_operador,
    core_passmaster,
    django_admin_log,
    django_content_type,
    django_flatpage,
    django_flatpage_sites,
    django_migrations,
    django_session,
    django_site,
    faturamento_faturapagseguro,
    faturamento_notificationpagseguro,
    geo_cidade,
    geo_estado,
    geo_pais,
    produto_denuncia,
    produto_importacaodeproduto,
    produto_produto,
    produto_voucher,
    produto_wishlist,
    thumbnail_kvstore,
    usuario_usuario,
    usuario_usuario_groups,
    usuario_usuario_user_permissions,
    vendedor_vendedor,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
