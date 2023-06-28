const activeModalClass = 'modal-show';

// RegFund
const RegFund = document.getElementById("RegFund");
const containerRegFund = document.getElementById("modal-container-RegFund");
const modalRegFund = document.getElementById("RegFundAtivo");
const fecharRegFund = document.getElementById("fechar-RegFund");
const openRegFund = () => containerRegFund.classList.add(activeModalClass);
const closeRegFund = () => containerRegFund.classList.remove(activeModalClass);

RegFund.addEventListener('click', openRegFund);
fecharRegFund.addEventListener('click', closeRegFund);

containerRegFund.addEventListener('click', (event) => {
	if (modalRegFund.contains(event.target)) return;

	closeRegFund();
});

// GeorefImovel
const GeorefImovel = document.getElementById("GeorefImovel");
const containerGeorefImovel = document.getElementById("modal-container-GeorefImovel");
const modalGeorefImovel = document.getElementById("GeorefImovelAtivo");
const fecharGeorefImovel = document.getElementById("fechar-GeorefImovel");
const openGeorefImovel = () => containerGeorefImovel.classList.add(activeModalClass);
const closeGeorefImovel = () => containerGeorefImovel.classList.remove(activeModalClass);

GeorefImovel.addEventListener('click', openGeorefImovel);
fecharGeorefImovel.addEventListener('click', closeGeorefImovel);

containerGeorefImovel.addEventListener('click', (event) => {
	if (modalGeorefImovel.contains(event.target)) return;

	closeGeorefImovel();
});

// LevPlanimetrico
const LevPlanimetrico = document.getElementById("LevPlanimetrico");
const containerLevPlanimetrico = document.getElementById("modal-container-LevPlanimetrico");
const modalLevPlanimetrico = document.getElementById("LevPlanimetricoAtivo");
const fecharLevPlanimetrico = document.getElementById("fechar-LevPlanimetrico");
const openLevPlanimetrico = () => containerLevPlanimetrico.classList.add(activeModalClass);
const closeLevPlanimetrico = () => containerLevPlanimetrico.classList.remove(activeModalClass);

LevPlanimetrico.addEventListener('click', openLevPlanimetrico);
fecharLevPlanimetrico.addEventListener('click', closeLevPlanimetrico);

containerLevPlanimetrico.addEventListener('click', (event) => {
	if (modalLevPlanimetrico.contains(event.target)) return;

	closeLevPlanimetrico();
});

// CadAmbiental
const CadAmbiental = document.getElementById("CadAmbiental");
const containerCadAmbiental = document.getElementById("modal-container-CadAmbiental");
const modalCadAmbiental = document.getElementById("CadAmbientalAtivo");
const fecharCadAmbiental = document.getElementById("fechar-CadAmbiental");
const openCadAmbiental = () => containerCadAmbiental.classList.add(activeModalClass);
const closeCadAmbiental = () => containerCadAmbiental.classList.remove(activeModalClass);

CadAmbiental.addEventListener('click', openCadAmbiental);
fecharCadAmbiental.addEventListener('click', closeCadAmbiental);

containerCadAmbiental.addEventListener('click', (event) => {
	if (modalCadAmbiental.contains(event.target)) return;

	closeCadAmbiental();
});

// MarcoGeodesico
const MarcoGeodesico = document.getElementById("MarcoGeodesico");
const containerMarcoGeodesico = document.getElementById("modal-container-MarcoGeodesico");
const modalMarcoGeodesico = document.getElementById("MarcoGeodesicoAtivo");
const fecharMarcoGeodesico = document.getElementById("fechar-MarcoGeodesico");
const openMarcoGeodesico = () => containerMarcoGeodesico.classList.add(activeModalClass);
const closeMarcoGeodesico = () => containerMarcoGeodesico.classList.remove(activeModalClass);

MarcoGeodesico.addEventListener('click', openMarcoGeodesico);
fecharMarcoGeodesico.addEventListener('click', closeMarcoGeodesico);

containerMarcoGeodesico.addEventListener('click', (event) => {
	if (modalMarcoGeodesico.contains(event.target)) return;

	closeMarcoGeodesico();
});

// RetifAreas
const RetifAreas = document.getElementById("RetifAreas");
const containerRetifAreas = document.getElementById("modal-container-RetifAreas");
const modalRetifAreas = document.getElementById("RetifAreasAtivo");
const fecharRetifAreas = document.getElementById("fechar-RetifAreas");
const openRetifAreas = () => containerRetifAreas.classList.add(activeModalClass);
const closeRetifAreas = () => containerRetifAreas.classList.remove(activeModalClass);

RetifAreas.addEventListener('click', openRetifAreas);
fecharRetifAreas.addEventListener('click', closeRetifAreas);

containerRetifAreas.addEventListener('click', (event) => {
	if (modalRetifAreas.contains(event.target)) return;

	closeRetifAreas();
});

// SARE
const SARE = document.getElementById("SARE");
const containerSARE = document.getElementById("modal-container-SARE");
const modalSARE = document.getElementById("SAREAtivo");
const fecharSARE = document.getElementById("fechar-SARE");
const openSARE = () => containerSARE.classList.add(activeModalClass);
const closeSARE = () => containerSARE.classList.remove(activeModalClass);

SARE.addEventListener('click', openSARE);
fecharSARE.addEventListener('click', closeSARE);

containerSARE.addEventListener('click', (event) => {
	if (modalSARE.contains(event.target)) return;

	closeSARE();
});

// ProjetoLoteamento
const ProjetoLoteamento = document.getElementById("ProjetoLoteamento");
const containerProjetoLoteamento = document.getElementById("modal-container-ProjetoLoteamento");
const modalProjetoLoteamento = document.getElementById("ProjetoLoteamentoAtivo");
const fecharProjetoLoteamento = document.getElementById("fechar-ProjetoLoteamento");
const openProjetoLoteamento = () => containerProjetoLoteamento.classList.add(activeModalClass);
const closeProjetoLoteamento = () => containerProjetoLoteamento.classList.remove(activeModalClass);

ProjetoLoteamento.addEventListener('click', openProjetoLoteamento);
fecharProjetoLoteamento.addEventListener('click', closeProjetoLoteamento);

containerProjetoLoteamento.addEventListener('click', (event) => {
	if (modalProjetoLoteamento.contains(event.target)) return;

	closeProjetoLoteamento();
});

// LevantamentoTopografico
const LevantamentoTopografico = document.getElementById("LevantamentoTopografico");
const containerLevantamentoTopografico = document.getElementById("modal-container-LevantamentoTopografico");
const modalLevantamentoTopografico = document.getElementById("LevantamentoTopograficoAtivo");
const fecharLevantamentoTopografico = document.getElementById("fechar-LevantamentoTopografico");
const openLevantamentoTopografico = () => containerLevantamentoTopografico.classList.add(activeModalClass);
const closeLevantamentoTopografico = () => containerLevantamentoTopografico.classList.remove(activeModalClass);

LevantamentoTopografico.addEventListener('click', openLevantamentoTopografico);
fecharLevantamentoTopografico.addEventListener('click', closeLevantamentoTopografico);

containerLevantamentoTopografico.addEventListener('click', (event) => {
	if (modalLevantamentoTopografico.contains(event.target)) return;

	closeLevantamentoTopografico();
});