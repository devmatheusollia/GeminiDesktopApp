!include "MUI2.nsh"

!macro CustomLicensePage
  # Esta macro customiza a página de licença

  # Define o texto do botão de aceite para "Eu Concordo" (necessário para a lógica interna)
  !define MUI_LICENSEPAGE_BUTTON "Eu Concordo"

  # Insere a página de licença padrão
  !insertmacro MUI_PAGE_LICENSE "$(licenseFile)"

  # Pega o botão "Avançar/Próximo" da página e o renomeia para "Avançar"
  GetDlgItem $NextButton $mui.LicensePage.NextButton
  SendMessage $NextButton ${WM_SETTEXT} 0 "STR:Avançar"
!macroend