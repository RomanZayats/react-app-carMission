import React from "react";
import { render } from "@testing-library/react";
import VehicleCard from "./VehicleCard";

test("VehicleCard is rendered is correctly", () => {
  render(<VehicleCard />);
});

test("Simple VehicleCard snapshot", () => {
  const mockTitle = "Title";
  const mockFuelText = "fuel";
  const mockTransmission = "transmission";
  const mockMileageText = "mileage";

  const { container } = render(
    <VehicleCard
      title={mockTitle}
      fuelText={mockFuelText}
      transmissionText={mockTransmission}
      mileageText={mockMileageText}
    />
  );
  expect(container.innerHTML).toMatchInlineSnapshot(
    "\"<div class=\\\"card__wrapper\\\"><h3 class=\\\"card__title\\\">Title</h3><div class=\\\"card__img-wrapper\\\"><img class=\\\"card__img\\\" alt=\\\" \\\"></div><div class=\\\"card__info-wrapper\\\"><div class=\\\"card__fuel\\\"><span class=\\\"card__fuel-img\\\"><svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M12.8521 3.70337H3.95205C3.67549 3.70337 3.44922 3.92964 3.44922 4.2062V10.0893C3.44922 10.3658 3.67549 10.5921 3.95205 10.5921H12.8521C13.1287 10.5921 13.3549 10.3658 13.3549 10.0893V4.2062C13.3549 3.92964 13.1287 3.70337 12.8521 3.70337ZM12.3493 9.58646H4.45488V4.70903H12.3493V9.58646Z\\\" fill=\\\"url(#paint0_linear)\\\"></path><path d=\\\"M23.4921 21.7549H15.0647V13.7096H15.8843C16.6285 13.7096 17.2319 14.3181 17.2269 15.0623C17.2269 15.0673 17.2269 15.0673 17.2269 15.0723V16.4651C17.2269 17.9384 18.4186 19.1301 19.8919 19.1301C21.3652 19.1301 22.5569 17.9384 22.5569 16.4651V8.5104C22.5569 7.68576 22.2502 6.89129 21.687 6.28287L17.7549 1.80267L17.0006 2.4664L20.0478 5.94095C18.9466 6.12699 18.2024 7.16785 18.3884 8.26904C18.5493 9.24453 19.3941 9.95855 20.3847 9.95855C20.802 9.95352 21.2093 9.82781 21.5512 9.58645V16.4651C21.5512 17.3803 20.807 18.1245 19.8919 18.1245C18.9767 18.1245 18.2326 17.3803 18.2326 16.4651V15.0723C18.2376 13.77 17.1867 12.709 15.8894 12.704H15.8843H15.0647V3.3363C15.0647 2.18985 14.1395 1.2395 12.9931 1.2395H3.65053C2.50409 1.2395 1.58894 2.19488 1.58894 3.3363V21.7549H0.502828C0.226273 21.7549 0 21.9812 0 22.2577C0 22.5343 0.226273 22.7606 0.502828 22.7606H23.4972C23.7737 22.7606 24 22.5343 24 22.2577C24 21.9812 23.7737 21.7549 23.4921 21.7549ZM20.3847 8.94786C19.8215 8.94786 19.369 8.49029 19.369 7.93215C19.369 7.37401 19.8265 6.91644 20.3847 6.91644C20.9478 6.91644 21.4004 7.37401 21.4004 7.93215C21.4004 8.49029 20.9428 8.94786 20.3847 8.94786ZM14.0591 21.7549H2.59459V3.3363C2.59459 2.74296 3.0572 2.24516 3.65053 2.24516H12.9931C13.5864 2.24516 14.0591 2.74799 14.0591 3.3363V21.7549Z\\\" fill=\\\"url(#paint1_linear)\\\"></path><defs><linearGradient id=\\\"paint0_linear\\\" x1=\\\"35.289\\\" y1=\\\"-14.5026\\\" x2=\\\"-24.1001\\\" y2=\\\"-26.8311\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint1_linear\\\" x1=\\\"77.1429\\\" y1=\\\"-55.6376\\\" x2=\\\"-69.1564\\\" y2=\\\"-79.1905\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient></defs></svg></span><p class=\\\"card__info-text\\\">fuel</p></div><div class=\\\"card__transmission\\\"><span class=\\\"card__transmission-img\\\"><svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M12 0C5.38312 0 0 5.38317 0 12C0 18.6168 5.38312 24 12 24C18.6169 24 24 18.6168 24 12C24 5.38317 18.6169 0 12 0ZM12 23.04C5.91258 23.04 0.96 18.0875 0.96 12C0.96 5.91253 5.91258 0.96 12 0.96C18.0874 0.96 23.04 5.91253 23.04 12C23.04 18.0875 18.0874 23.04 12 23.04Z\\\" fill=\\\"url(#paint0_linear)\\\"></path><path d=\\\"M15.8398 4.32007C15.0457 4.32007 14.3998 4.96427 14.3998 5.75608V10.0801H12.9598V5.75608C12.9598 4.96427 12.3138 4.32007 11.5198 4.32007C10.7257 4.32007 10.0798 4.96427 10.0798 5.75608V10.0801H8.63977V7.68143C8.63977 6.88666 7.99383 6.24007 7.19977 6.24007C6.4057 6.24007 5.75977 6.88666 5.75977 7.68143V12.9601C5.75977 13.2251 5.97469 13.4401 6.23977 13.4401H10.0798V18.2441C10.0798 19.0359 10.7257 19.6801 11.5198 19.6801C12.3138 19.6801 12.9598 19.0359 12.9598 18.2441V13.4401H14.3998V18.2441C14.3998 19.0359 15.0457 19.6801 15.8398 19.6801C16.6338 19.6801 17.2798 19.0359 17.2798 18.2441V5.75608C17.2798 4.96427 16.6338 4.32007 15.8398 4.32007ZM16.3198 18.2441C16.3198 18.511 16.109 18.7201 15.8398 18.7201C15.575 18.7201 15.3598 18.5066 15.3598 18.2441V12.9601C15.3598 12.695 15.1448 12.4801 14.8798 12.4801H12.4798C12.2147 12.4801 11.9998 12.695 11.9998 12.9601V18.2441C11.9998 18.511 11.789 18.7201 11.5198 18.7201C11.255 18.7201 11.0398 18.5066 11.0398 18.2441V12.9601C11.0398 12.695 10.8248 12.4801 10.5598 12.4801H6.71977V7.68143C6.71977 7.41147 6.93056 7.20007 7.19977 7.20007C7.46452 7.20007 7.67977 7.41597 7.67977 7.68143V10.5601C7.67977 10.8251 7.89469 11.0401 8.15977 11.0401H10.5598C10.8248 11.0401 11.0398 10.8251 11.0398 10.5601V5.75608C11.0398 5.48913 11.2506 5.28007 11.5198 5.28007C11.7845 5.28007 11.9998 5.49358 11.9998 5.75608V10.5601C11.9998 10.8251 12.2147 11.0401 12.4798 11.0401H14.8798C15.1448 11.0401 15.3598 10.8251 15.3598 10.5601V5.75608C15.3598 5.48913 15.5706 5.28007 15.8398 5.28007C16.1045 5.28007 16.3198 5.49358 16.3198 5.75608V18.2441Z\\\" fill=\\\"url(#paint1_linear)\\\"></path><defs><linearGradient id=\\\"paint0_linear\\\" x1=\\\"77.1429\\\" y1=\\\"-63.4285\\\" x2=\\\"-69.8841\\\" y2=\\\"-84.6538\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint1_linear\\\" x1=\\\"42.7883\\\" y1=\\\"-36.2742\\\" x2=\\\"-28.4206\\\" y2=\\\"-43.9842\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient></defs></svg></span><p class=\\\"card__info-text\\\">transmission</p></div><div class=\\\"card__auction\\\"><span class=\\\"card__auction-img\\\"><svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M13.7374 18.2802H2.14706C0.963139 18.2802 0 19.2433 0 20.4272V23.5936C0 23.8177 0.181687 23.9994 0.405749 23.9994H15.4787C15.7028 23.9994 15.8844 23.8177 15.8844 23.5936V20.4272C15.8845 19.2433 14.9213 18.2802 13.7374 18.2802ZM15.0729 23.1878H0.811545V20.4272C0.811545 19.6909 1.41061 19.0917 2.14706 19.0917H13.7374C14.4738 19.0917 15.073 19.6908 15.073 20.4272V23.1878H15.0729Z\\\" fill=\\\"url(#paint0_linear)\\\"></path><path d=\\\"M15.0331 6.02447L10.5544 1.5458C10.4783 1.46972 10.3751 1.42697 10.2675 1.42697C10.1599 1.42697 10.0567 1.46972 9.98058 1.5458L4.38839 7.13803C4.22991 7.29647 4.22991 7.55339 4.38839 7.71183L8.86702 12.1904C8.94624 12.2697 9.05011 12.3093 9.15394 12.3093C9.25781 12.3093 9.36164 12.2697 9.44086 12.1905L15.0331 6.59831C15.1915 6.43983 15.1915 6.18291 15.0331 6.02447ZM9.15394 11.3297L5.24916 7.42491L10.2675 2.40661L14.1722 6.31139L9.15394 11.3297Z\\\" fill=\\\"url(#paint1_linear)\\\"></path><path d=\\\"M9.40348 11.5796L4.99907 7.17517C4.50655 6.6827 3.70522 6.6827 3.21276 7.17517C2.97416 7.41376 2.84277 7.73092 2.84277 8.06832C2.84277 8.40573 2.97416 8.72289 3.21276 8.96143L7.61717 13.3659C7.8634 13.6121 8.18684 13.7352 8.51028 13.7352C8.83371 13.7352 9.1572 13.6121 9.40348 13.366C9.64207 13.1274 9.77346 12.8102 9.77346 12.4728C9.77346 12.1355 9.64203 11.8182 9.40348 11.5796ZM8.8295 12.792C8.65353 12.968 8.36708 12.9681 8.19092 12.792L3.78646 8.38745C3.70119 8.30218 3.65422 8.18884 3.65422 8.06823C3.65422 7.94762 3.70115 7.83423 3.78646 7.74892C3.96257 7.57286 4.24897 7.57286 4.42508 7.74892L8.8295 12.1534C9.00556 12.3295 9.00556 12.6159 8.8295 12.792Z\\\" fill=\\\"url(#paint2_linear)\\\"></path><path d=\\\"M16.2082 4.77501L11.8038 0.370594C11.5652 0.132001 11.248 0.000610352 10.9106 0.000610352C10.5732 0.000610352 10.256 0.132001 10.0174 0.3705C9.77885 0.609047 9.64746 0.926249 9.64746 1.26365C9.64746 1.60106 9.77885 1.91822 10.0174 2.15681L14.4218 6.56122H14.4219C14.6681 6.80741 14.9915 6.9305 15.315 6.9305C15.6384 6.9305 15.9619 6.80741 16.2082 6.56127C16.7006 6.0688 16.7006 5.26743 16.2082 4.77501ZM15.6343 5.98733C15.4581 6.16344 15.1718 6.16344 14.9956 5.98733L10.5912 1.58292C10.506 1.49765 10.459 1.38426 10.459 1.26361C10.459 1.143 10.506 1.02961 10.5913 0.944296C10.6766 0.859031 10.7899 0.812062 10.9106 0.812062C11.0312 0.812062 11.1446 0.858984 11.2299 0.944296L15.6343 5.34871C15.8104 5.52482 15.8104 5.81127 15.6343 5.98733Z\\\" fill=\\\"url(#paint3_linear)\\\"></path><path d=\\\"M23.5692 18.6439V18.6439L12.9911 8.06588C12.915 7.9898 12.8118 7.94705 12.7042 7.94705C12.5966 7.94705 12.4934 7.9898 12.4173 8.06588L10.9079 9.5753C10.7494 9.73374 10.7494 9.99066 10.9079 10.1491L21.4859 20.7271C21.7731 21.0143 22.1503 21.1579 22.5275 21.1579C22.9047 21.1579 23.282 21.0143 23.5692 20.7271C24.1435 20.1528 24.1435 19.2182 23.5692 18.6439ZM22.9954 20.1533C22.7373 20.4112 22.3177 20.4112 22.0597 20.1533L11.7686 9.86217L12.7042 8.9266L22.9953 19.2177C23.2532 19.4757 23.2532 19.8953 22.9954 20.1533Z\\\" fill=\\\"url(#paint4_linear)\\\"></path></g><defs><linearGradient id=\\\"paint0_linear\\\" x1=\\\"51.057\\\" y1=\\\"3.16511\\\" x2=\\\"-34.5229\\\" y2=\\\"-31.1482\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint1_linear\\\" x1=\\\"39.2486\\\" y1=\\\"-27.3334\\\" x2=\\\"-27.4182\\\" y2=\\\"-36.9577\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint2_linear\\\" x1=\\\"25.12\\\" y1=\\\"-11.5076\\\" x2=\\\"-17.338\\\" y2=\\\"-17.6381\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint3_linear\\\" x1=\\\"31.9226\\\" y1=\\\"-18.3141\\\" x2=\\\"-10.5317\\\" y2=\\\"-24.443\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint4_linear\\\" x1=\\\"53.2525\\\" y1=\\\"-26.9672\\\" x2=\\\"-27.6788\\\" y2=\\\"-38.6507\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><clipPath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clipPath></defs></svg></span><p class=\\\"card__info-text\\\"></p></div><div class=\\\"card__mileage\\\"><span class=\\\"card__mileage-img\\\"><svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><g clip-path=\\\"url(#clip0)\\\"><path d=\\\"M10.5 14.0679C10.5 14.8949 11.1729 15.5677 11.9999 15.5677C12.8269 15.5677 13.4997 14.8949 13.4997 14.0679C13.4997 13.8609 13.3319 13.693 13.1249 13.693C12.9179 13.693 12.7501 13.8609 12.7501 14.0679C12.7501 14.4815 12.4136 14.8181 11.9999 14.8181C11.5862 14.8181 11.2497 14.4815 11.2497 14.0679C11.2497 13.9905 11.2615 13.9158 11.2833 13.8456C11.2962 13.8259 11.308 13.8053 11.3174 13.7828C11.3264 13.7609 11.3329 13.7387 11.3376 13.7163C11.4639 13.4794 11.7132 13.3177 11.9999 13.3177C12.2069 13.3177 12.3747 13.1499 12.3747 12.9429C12.3747 12.7359 12.2069 12.5681 11.9999 12.5681C11.5115 12.5681 11.077 12.8028 10.803 13.1653L5.09099 10.8104C4.89956 10.7315 4.68048 10.8227 4.60163 11.0141C4.52274 11.2054 4.61391 11.4245 4.80529 11.5034L10.5152 13.8575C10.5054 13.9262 10.5 13.9964 10.5 14.0679Z\\\" fill=\\\"url(#paint0_linear)\\\"></path><path d=\\\"M20.4853 5.58234C18.2188 3.31586 15.2053 2.06763 12 2.06763C8.79466 2.06763 5.78124 3.31586 3.51472 5.58234C1.24819 7.84883 0 10.8623 0 14.0676C0 16.4148 0.680221 18.6904 1.96706 20.6485C2.03907 20.7581 2.15863 20.8175 2.28063 20.8175C2.35128 20.8175 2.42268 20.7976 2.48612 20.7559C2.65909 20.6422 2.70716 20.4098 2.5935 20.2369C2.27337 19.7498 1.99376 19.2416 1.75502 18.7169L2.78896 18.2886C2.9802 18.2094 3.07104 17.9901 2.99182 17.7989C2.9126 17.6076 2.69329 17.5169 2.50209 17.596L1.46745 18.0246C1.03792 16.8833 0.796738 15.6756 0.756025 14.4424H1.87481C2.0818 14.4424 2.24961 14.2745 2.24961 14.0676C2.24961 13.8606 2.0818 13.6928 1.87481 13.6928H0.756446C0.796831 12.4508 1.03764 11.2439 1.46347 10.1089L2.50209 10.5391C2.54899 10.5586 2.59757 10.5677 2.64541 10.5677C2.79247 10.5677 2.93204 10.4806 2.99182 10.3363C3.07104 10.1451 2.9802 9.9258 2.78896 9.84657L1.75033 9.41635C2.25177 8.31264 2.93494 7.28892 3.78457 6.38217L4.57541 7.17301C4.64859 7.24619 4.74449 7.28278 4.84044 7.28278C4.93639 7.28278 5.03229 7.24619 5.10547 7.17301C5.25188 7.02665 5.25188 6.78935 5.10547 6.64299L4.31464 5.85216C5.22138 5.00257 6.24511 4.3194 7.34881 3.81791L7.77904 4.85654C7.83882 5.00088 7.97839 5.08798 8.12545 5.08798C8.17328 5.08798 8.22187 5.0788 8.26877 5.05935C8.46001 4.98013 8.55085 4.76087 8.47163 4.56963L8.0414 3.531C9.1764 3.10518 10.3834 2.86436 11.6253 2.82398V3.94235C11.6253 4.14933 11.7931 4.31715 12.0001 4.31715C12.2071 4.31715 12.3749 4.14933 12.3749 3.94235V2.82407C13.6168 2.86446 14.8237 3.10527 15.9587 3.53109L15.5285 4.56972C15.4493 4.76096 15.5401 4.98022 15.7314 5.05945C15.7783 5.07889 15.8269 5.08807 15.8747 5.08807C16.0218 5.08807 16.1613 5.00093 16.2211 4.85663L16.6513 3.818C17.755 4.31944 18.7788 5.00262 19.6855 5.85225L18.8946 6.64308C18.7482 6.78944 18.7482 7.02674 18.8946 7.1731C18.9678 7.24628 19.0637 7.28287 19.1597 7.28287C19.2556 7.28287 19.3515 7.24628 19.4247 7.1731L20.2155 6.38227C21.0651 7.28901 21.7483 8.31274 22.2498 9.41644L21.2111 9.84667C21.0199 9.92589 20.9291 10.1452 21.0083 10.3364C21.0681 10.4807 21.2076 10.5678 21.3547 10.5678C21.4025 10.5678 21.4511 10.5587 21.498 10.5392L22.5366 10.109C22.9625 11.244 23.2033 12.4509 23.2436 13.6928H22.1253C21.9183 13.6928 21.7505 13.8607 21.7505 14.0677C21.7505 14.2746 21.9183 14.4425 22.1253 14.4425H23.244C23.2034 15.6757 22.9621 16.8834 22.5326 18.0247L21.498 17.5961C21.3068 17.517 21.0875 17.6077 21.0082 17.799C20.929 17.9902 21.0198 18.2095 21.2111 18.2887L22.245 18.717C22.0063 19.2417 21.7267 19.7499 21.4066 20.237C21.2928 20.4099 21.341 20.6423 21.5139 20.756C21.6869 20.8696 21.9193 20.8216 22.033 20.6486C23.3199 18.6906 24 16.4149 24 14.0677C24 10.8623 22.7518 7.84883 20.4853 5.58234Z\\\" fill=\\\"url(#paint1_linear)\\\"></path><path d=\\\"M15.367 18.1843H8.6205C8.00053 18.1843 7.49609 18.6888 7.49609 19.3087V20.8079C7.49609 21.4279 8.00053 21.9324 8.6205 21.9324H15.367C15.9869 21.9324 16.4914 21.4279 16.4914 20.8079V19.3087C16.4914 18.6887 15.9869 18.1843 15.367 18.1843ZM15.7418 20.8079C15.7418 21.0146 15.5736 21.1827 15.367 21.1827H8.6205C8.41385 21.1827 8.2457 21.0146 8.2457 20.8079V19.3087C8.2457 19.1021 8.41385 18.9339 8.6205 18.9339H15.367C15.5736 18.9339 15.7418 19.1021 15.7418 19.3087V20.8079Z\\\" fill=\\\"url(#paint2_linear)\\\"></path><path d=\\\"M12.3685 19.6836H11.6189C11.412 19.6836 11.2441 19.8514 11.2441 20.0584C11.2441 20.2654 11.412 20.4332 11.6189 20.4332H12.3685C12.5755 20.4332 12.7434 20.2654 12.7434 20.0584C12.7434 19.8514 12.5755 19.6836 12.3685 19.6836Z\\\" fill=\\\"url(#paint3_linear)\\\"></path><path d=\\\"M10.4945 19.6836H9.74492C9.53794 19.6836 9.37012 19.8514 9.37012 20.0584C9.37012 20.2654 9.53794 20.4332 9.74492 20.4332H10.4945C10.7015 20.4332 10.8693 20.2654 10.8693 20.0584C10.8693 19.8514 10.7015 19.6836 10.4945 19.6836Z\\\" fill=\\\"url(#paint4_linear)\\\"></path><path d=\\\"M14.2426 19.6836H13.493C13.286 19.6836 13.1182 19.8514 13.1182 20.0584C13.1182 20.2654 13.286 20.4332 13.493 20.4332H14.2426C14.4496 20.4332 14.6174 20.2654 14.6174 20.0584C14.6174 19.8514 14.4496 19.6836 14.2426 19.6836Z\\\" fill=\\\"url(#paint5_linear)\\\"></path></g><defs><linearGradient id=\\\"paint0_linear\\\" x1=\\\"33.2654\\\" y1=\\\"-1.8659\\\" x2=\\\"-18.7848\\\" y2=\\\"-15.8815\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint1_linear\\\" x1=\\\"77.143\\\" y1=\\\"-47.4859\\\" x2=\\\"-67.9927\\\" y2=\\\"-74.3048\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint2_linear\\\" x1=\\\"36.4095\\\" y1=\\\"8.27882\\\" x2=\\\"-13.816\\\" y2=\\\"-9.12285\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint3_linear\\\" x1=\\\"16.063\\\" y1=\\\"17.7025\\\" x2=\\\"7.40871\\\" y2=\\\"15.2038\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint4_linear\\\" x1=\\\"14.189\\\" y1=\\\"17.7025\\\" x2=\\\"5.53469\\\" y2=\\\"15.2038\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><linearGradient id=\\\"paint5_linear\\\" x1=\\\"17.9371\\\" y1=\\\"17.7025\\\" x2=\\\"9.28274\\\" y2=\\\"15.2038\\\" gradientUnits=\\\"userSpaceOnUse\\\"><stop stop-color=\\\"#BEBFC0\\\"></stop><stop offset=\\\"0.278807\\\" stop-color=\\\"#7D7E80\\\"></stop><stop offset=\\\"0.578125\\\" stop-color=\\\"#DDDEDF\\\"></stop><stop offset=\\\"0.953125\\\" stop-color=\\\"#646567\\\"></stop></linearGradient><clipPath id=\\\"clip0\\\"><rect width=\\\"24\\\" height=\\\"24\\\" fill=\\\"white\\\"></rect></clipPath></defs></svg></span><p class=\\\"card__info-text\\\">mileage</p></div></div><span class=\\\"card__line\\\"></span><div class=\\\"card__details\\\"><p class=\\\"card__details-title\\\">Title/Sale Doc:</p><p class=\\\"card__details-name\\\">SALVAGE-VA</p></div><span class=\\\"card__line\\\"></span><div class=\\\"card__additionally-primary\\\"><p class=\\\"card__additionally-title\\\">Primary Damage:</p><p class=\\\"card__additionally-name\\\">Normal Wear</p></div><div class=\\\"card__additionally-highlits\\\"><p class=\\\"card__additionally-title\\\">Highlits:</p><p class=\\\"card__additionally-name\\\">Offsite Sales, Run and Drive</p></div><div class=\\\"card__additionally-seller\\\"><p class=\\\"card__additionally-title\\\">Seller:</p><p class=\\\"card__additionally-name\\\">Progressive</p></div></div>\""
  );
});
