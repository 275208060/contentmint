Cmint.createComponent({
    template: '\
        <comp :config="config">\
            <table cellpadding="0" cellspacing="0" :align="config.fields.output.alignment" style="background:#cb4f29">\
                <tr>\
                  <td width="20" height="3"></td>\
                  <td>&nbsp;</td>\
                  <td width="20" height="3"></td>\
                </tr>\
                <tr>\
                  <td width="20" height="3"></td>\
                  <td>\
                      <div style="font-family:Arial, sans-serif; font-size:14px; font-style:italic; font-weight:bold; text-align:center; line-height:14px;">\
                        <a :href="config.fields.output.href" style="color:#ffffff; text-decoration:none;" v-text="config.fields.output.linktext"></a>\
                      </div>\
                    </td>\
                  <td width="20" height="3"></td>\
                </tr>\
                <tr>\
                  <td width="20" height="3"></td>\
                  <td>&nbsp;</td>\
                  <td width="20" height="3"></td>\
                </tr>\
            </table>\
            <br>\
        </comp>',
    config: {
        name: 'button-cta',
        display: 'Button',
        category: 'Buttons',
        fields: {
            output: {
                href: '#',
                linktext: 'Button Link Text',
                alignment: 'center'
            },
            list: [
                { name: 'link-choice', result: 'href' },
                { name: 'plaintext', result: 'linktext' },
                { name: 'align-attr', result: 'alignment' }
            ]
        }
    }
})