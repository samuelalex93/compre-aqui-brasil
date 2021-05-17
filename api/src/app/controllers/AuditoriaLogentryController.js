import * as Yup from 'yup';

import AuditoriaLogentry from '../models/auditoria_logentry';

class AuditoriaLogentryController {
  async store(req, res) {

    // const schema = Yup.object().shape({
    //   problem: Yup.string().required(),
    //   message: Yup.string().required(),
    //   email: Yup.string().email().required(),
    // });

    // if (!(await schema.isValid(req.body))) {
    //   return res.status(400).json({ error: 'Validation fails' });
    // }
    
    const { 
      id, 
      object_pk,
      object_id,
      object_repr,
      action,
      changes,
      remote_addr,
      timestamp,
      additional_data,
      actor_id,
      content_type_id } = await AuditoriaLogentry.create(req.body);

    return res.json({
      id, 
      object_pk,
      object_id,
      object_repr,
      action,
      changes,
      remote_addr,
      timestamp,
      additional_data,
      actor_id,
      content_type_id
    });
  }

  // async update(req, res) {
  //   const schema = Yup.object().shape({
  //     solved: Yup.boolean().required(),
  //     soluction: Yup.string().required(),
  //   });

  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({ error: 'Validation fails' });
  //   }

  //   const { 
  //     solved,
  //     soluction } = await AuditoriaLogentry.update(req.body);

  //   return res.json({
  //     claim_id, 
  //     problem,
  //     message,
  //     email,
  //     company,
  //     product,
  //     dateRegister,
  //     solved,
  //     soluction
  //   });
  // }
}

export default new AuditoriaLogentryController();
