const text = `
HloModule SyncTensorsGraph.1864, input_output_alias={ {0}: (41, {}, must-alias) }

%MaxComputation.488 (x.489: f32[], y.490: f32[]) -> f32[] {
  %x.489 = f32[] parameter(0)
  %y.490 = f32[] parameter(1)
  ROOT %maximum.491 = f32[] maximum(f32[] %x.489, f32[] %y.490)
}

%AddComputation.497 (x.498: f32[], y.499: f32[]) -> f32[] {
  %x.498 = f32[] parameter(0)
  %y.499 = f32[] parameter(1)
  ROOT %add.500 = f32[] add(f32[] %x.498, f32[] %y.499)
}

%AddComputation.985 (x.986: f32[], y.987: f32[]) -> f32[] {
  %x.986 = f32[] parameter(0)
  %y.987 = f32[] parameter(1)
  ROOT %add.988 = f32[] add(f32[] %x.986, f32[] %y.987)
}

%AddComputation.1279 (x.1280: f32[], y.1281: f32[]) -> f32[] {
  %x.1280 = f32[] parameter(0)
  %y.1281 = f32[] parameter(1)
  ROOT %add.1282 = f32[] add(f32[] %x.1280, f32[] %y.1281)
}

%ScatterCombiner.1381 (p0.1382: f32[], p1.1383: f32[]) -> f32[] {
  %p0.1382 = f32[] parameter(0)
  %p1.1383 = f32[] parameter(1)
  ROOT %add.1384 = f32[] add(f32[] %p0.1382, f32[] %p1.1383)
}

%AddComputation.1432 (x.1433: f32[], y.1434: f32[]) -> f32[] {
  %x.1433 = f32[] parameter(0)
  %y.1434 = f32[] parameter(1)
  ROOT %add.1435 = f32[] add(f32[] %x.1433, f32[] %y.1434)
}

%AddComputation.1448 (x.1449: f32[], y.1450: f32[]) -> f32[] {
  %x.1449 = f32[] parameter(0)
  %y.1450 = f32[] parameter(1)
  ROOT %add.1451 = f32[] add(f32[] %x.1449, f32[] %y.1450)
}

%AddComputation.1475 (x.1476: f32[], y.1477: f32[]) -> f32[] {
  %x.1476 = f32[] parameter(0)
  %y.1477 = f32[] parameter(1)
  ROOT %add.1478 = f32[] add(f32[] %x.1476, f32[] %y.1477)
}

%AddComputation.1504 (x.1505: f32[], y.1506: f32[]) -> f32[] {
  %x.1505 = f32[] parameter(0)
  %y.1506 = f32[] parameter(1)
  ROOT %add.1507 = f32[] add(f32[] %x.1505, f32[] %y.1506)
}

%AddComputation.1527 (x.1528: f32[], y.1529: f32[]) -> f32[] {
  %x.1528 = f32[] parameter(0)
  %y.1529 = f32[] parameter(1)
  ROOT %add.1530 = f32[] add(f32[] %x.1528, f32[] %y.1529)
}

%AddComputation.1543 (x.1544: f32[], y.1545: f32[]) -> f32[] {
  %x.1544 = f32[] parameter(0)
  %y.1545 = f32[] parameter(1)
  ROOT %add.1546 = f32[] add(f32[] %x.1544, f32[] %y.1545)
}

%AddComputation.1570 (x.1571: f32[], y.1572: f32[]) -> f32[] {
  %x.1571 = f32[] parameter(0)
  %y.1572 = f32[] parameter(1)
  ROOT %add.1573 = f32[] add(f32[] %x.1571, f32[] %y.1572)
}

%AddComputation.1597 (x.1598: f32[], y.1599: f32[]) -> f32[] {
  %x.1598 = f32[] parameter(0)
  %y.1599 = f32[] parameter(1)
  ROOT %add.1600 = f32[] add(f32[] %x.1598, f32[] %y.1599)
}

%AddComputation.1620 (x.1621: f32[], y.1622: f32[]) -> f32[] {
  %x.1621 = f32[] parameter(0)
  %y.1622 = f32[] parameter(1)
  ROOT %add.1623 = f32[] add(f32[] %x.1621, f32[] %y.1622)
}

%AddComputation.1636 (x.1637: f32[], y.1638: f32[]) -> f32[] {
  %x.1637 = f32[] parameter(0)
  %y.1638 = f32[] parameter(1)
  ROOT %add.1639 = f32[] add(f32[] %x.1637, f32[] %y.1638)
}

%AddComputation.1757 (x.1758: f32[], y.1759: f32[]) -> f32[] {
  %x.1758 = f32[] parameter(0)
  %y.1759 = f32[] parameter(1)
  ROOT %add.1760 = f32[] add(f32[] %x.1758, f32[] %y.1759)
}

%AddComputation.1780 (x.1781: f32[], y.1782: f32[]) -> f32[] {
  %x.1781 = f32[] parameter(0)
  %y.1782 = f32[] parameter(1)
  ROOT %add.1783 = f32[] add(f32[] %x.1781, f32[] %y.1782)
}

%AddComputation.1799 (x.1800: f32[], y.1801: f32[]) -> f32[] {
  %x.1800 = f32[] parameter(0)
  %y.1801 = f32[] parameter(1)
  ROOT %add.1802 = f32[] add(f32[] %x.1800, f32[] %y.1801)
}

%SimpleCrossEntropyLossForwardMax.877 (p0.878: f32[], p1.879: f32[]) -> f32[] {
  %p0.878 = f32[] parameter(0)
  %p1.879 = f32[] parameter(1)
  ROOT %maximum.880 = f32[] maximum(f32[] %p0.878, f32[] %p1.879)
}

%SimpleCrossEntropyLossForwardAdd.881 (p0.882: f32[], p1.883: f32[]) -> f32[] {
  %p0.882 = f32[] parameter(0)
  %p1.883 = f32[] parameter(1)
  ROOT %add.884 = f32[] add(f32[] %p0.882, f32[] %p1.883)
}

%SimpleCrossEntropyLossForwardAdd.885 (p0.886: f32[], p1.887: f32[]) -> f32[] {
  %p0.886 = f32[] parameter(0)
  %p1.887 = f32[] parameter(1)
  ROOT %add.888 = f32[] add(f32[] %p0.886, f32[] %p1.887)
}

%SimpleCrossEntropyLossForwardAdd.889 (p0.890: f32[], p1.891: f32[]) -> f32[] {
  %p0.890 = f32[] parameter(0)
  %p1.891 = f32[] parameter(1)
  ROOT %add.892 = f32[] add(f32[] %p0.890, f32[] %p1.891)
}

%SimpleCrossEntropyLossForwardAdd.893 (p0.894: f32[], p1.895: f32[]) -> f32[] {
  %p0.894 = f32[] parameter(0)
  %p1.895 = f32[] parameter(1)
  ROOT %add.896 = f32[] add(f32[] %p0.894, f32[] %p1.895)
}

%SimpleCrossEntropyLossBackwardAdd.1009 (p0.1010: f32[], p1.1011: f32[]) -> f32[] {
  %p0.1010 = f32[] parameter(0)
  %p1.1011 = f32[] parameter(1)
  ROOT %add.1012 = f32[] add(f32[] %p0.1010, f32[] %p1.1011)
}

%SimpleCrossEntropyLossForwardMax.690 (p0.691: f32[], p1.692: f32[]) -> f32[] {
  %p0.691 = f32[] parameter(0)
  %p1.692 = f32[] parameter(1)
  ROOT %maximum.693 = f32[] maximum(f32[] %p0.691, f32[] %p1.692)
}

%SimpleCrossEntropyLossForwardAdd.694 (p0.695: f32[], p1.696: f32[]) -> f32[] {
  %p0.695 = f32[] parameter(0)
  %p1.696 = f32[] parameter(1)
  ROOT %add.697 = f32[] add(f32[] %p0.695, f32[] %p1.696)
}

%SimpleCrossEntropyLossForwardAdd.698 (p0.699: f32[], p1.700: f32[]) -> f32[] {
  %p0.699 = f32[] parameter(0)
  %p1.700 = f32[] parameter(1)
  ROOT %add.701 = f32[] add(f32[] %p0.699, f32[] %p1.700)
}

%SimpleCrossEntropyLossForwardAdd.702 (p0.703: f32[], p1.704: f32[]) -> f32[] {
  %p0.703 = f32[] parameter(0)
  %p1.704 = f32[] parameter(1)
  ROOT %add.705 = f32[] add(f32[] %p0.703, f32[] %p1.704)
}

%SimpleCrossEntropyLossForwardAdd.706 (p0.707: f32[], p1.708: f32[]) -> f32[] {
  %p0.707 = f32[] parameter(0)
  %p1.708 = f32[] parameter(1)
  ROOT %add.709 = f32[] add(f32[] %p0.707, f32[] %p1.708)
}

%SimpleCrossEntropyLossBackwardAdd.950 (p0.951: f32[], p1.952: f32[]) -> f32[] {
  %p0.951 = f32[] parameter(0)
  %p1.952 = f32[] parameter(1)
  ROOT %add.953 = f32[] add(f32[] %p0.951, f32[] %p1.952)
}

%Int32PermissiveEmbeddingScatterCombiner.1805 (p0.1806: f32[], p1.1807: f32[]) -> f32[] {
  %p0.1806 = f32[] parameter(0)
  %p1.1807 = f32[] parameter(1)
  ROOT %add.1808 = f32[] add(f32[] %p0.1806, f32[] %p1.1807)
}

%Int32PermissiveEmbeddingScatterCombiner.1834 (p0.1835: f32[], p1.1836: f32[]) -> f32[] {
  %p0.1835 = f32[] parameter(0)
  %p1.1836 = f32[] parameter(1)
  ROOT %add.1837 = f32[] add(f32[] %p0.1835, f32[] %p1.1836)
}

%AddComputation.1045 (x.1046: f32[], y.1047: f32[]) -> f32[] {
  %x.1046 = f32[] parameter(0)
  %y.1047 = f32[] parameter(1)
  ROOT %add.1048 = f32[] add(f32[] %x.1046, f32[] %y.1047)
}

%AddComputation.1409 (x.1410: f32[], y.1411: f32[]) -> f32[] {
  %x.1410 = f32[] parameter(0)
  %y.1411 = f32[] parameter(1)
  ROOT %add.1412 = f32[] add(f32[] %x.1410, f32[] %y.1411)
}

%AddComputation.1669 (x.1670: f32[], y.1671: f32[]) -> f32[] {
  %x.1670 = f32[] parameter(0)
  %y.1671 = f32[] parameter(1)
  ROOT %add.1672 = f32[] add(f32[] %x.1670, f32[] %y.1671)
}

%AddComputation.1700 (x.1701: f32[], y.1702: f32[]) -> f32[] {
  %x.1701 = f32[] parameter(0)
  %y.1702 = f32[] parameter(1)
  ROOT %add.1703 = f32[] add(f32[] %x.1701, f32[] %y.1702)
}

%AddComputation.1730 (x.1731: f32[], y.1732: f32[]) -> f32[] {
  %x.1731 = f32[] parameter(0)
  %y.1732 = f32[] parameter(1)
  ROOT %add.1733 = f32[] add(f32[] %x.1731, f32[] %y.1732)
}

ENTRY %SyncTensorsGraph.1864 (p0.2: f32[], p1.4: s64[16], p2.5: f32[2], p3.13: f32[2,16], p4.22: f32[16], p5.30: f32[16,16], p6.40: f32[16], p7.74: f32[16], p8.107: f32[], p9.108: s64[], p10.144: f32[16], p11.177: s64[1,512], p12.181: f32[512,16], p13.198: s64[16,128], p14.200: f32[2,16], p15.212: s64[16,128], p16.214: f32[30522,16], p17.240: f32[16], p18.300: f32[16], p19.309: f32[16,16], p20.323: f32[16], p21.332: f32[16,16], p22.387: f32[], p23.388: s64[16,128], p24.409: f32[], p25.415: f32[16], p26.424: f32[16,16], p27.450: f32[16], p28.459: f32[16,16], p29.530: f32[16], p30.585: f32[16], p31.594: f32[16,4096], p32.608: f32[4096], p33.617: f32[4096,16], p34.659: f32[16], p35.754: s64[16,128], p36.761: f32[30522], p37.779: f32[16], p38.812: f32[16], p39.821: f32[16,16], p40.854: f32[16], p41.943: f32[1], p42.1363: s64[]) -> (f32[1], f32[16,128,30522], f32[16,2], f32[], f32[], /*index=5*/f32[2], f32[2,16], f32[30522], f32[30522,16], f32[16], /*index=10*/f32[16], f32[16], f32[16,16], f32[16], f32[16,16], /*index=15*/f32[16], f32[16], f32[16], f32[16,4096], f32[4096], /*index=20*/f32[4096,16], f32[16], f32[16], f32[16], f32[16,16], /*index=25*/f32[16], f32[16,16], f32[16], f32[16,16], f32[16], /*index=30*/f32[16,16], f32[16], f32[16], f32[512,16], f32[2,16]) {
  %p41.943 = f32[1]{0} parameter(41), frontend_attributes={neff_input_names="input41"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=351}
  %p35.754 = s64[16,128]{1,0} parameter(35), frontend_attributes={neff_input_names="input35"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1134}
  %constant.6 = s64[] constant(-100)
  %broadcast.144 = s64[16,128]{1,0} broadcast(s64[] %constant.6), dimensions={}
  %compare.8 = pred[16,128]{1,0} compare(s64[16,128]{1,0} %p35.754, s64[16,128]{1,0} %broadcast.144), direction=NE
  %reshape.350 = pred[2048]{0} reshape(pred[16,128]{1,0} %compare.8)
  %p40.854 = f32[16]{0} parameter(40), frontend_attributes={neff_input_names="input40"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.97 = f32[16]{0} custom-call(f32[16]{0} %p40.854), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.867 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.97), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p34.659 = f32[16]{0} parameter(34), frontend_attributes={neff_input_names="input34"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.71 = f32[16]{0} custom-call(f32[16]{0} %p34.659), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.672 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.71), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p29.530 = f32[16]{0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.72 = f32[16]{0} custom-call(f32[16]{0} %p29.530), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.543 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.72), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p17.240 = f32[16]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.73 = f32[16]{0} custom-call(f32[16]{0} %p17.240), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.253 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p16.214 = f32[30522,16]{1,0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.74 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p16.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p15.212 = s64[16,128]{1,0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2233}
  %convert.6 = u32[16,128]{1,0} convert(s64[16,128]{1,0} %p15.212)
  %reshape.261 = u32[2048]{0} reshape(u32[16,128]{1,0} %convert.6), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2233}
  %gather.223 = f32[2048,16]{1,0} gather(f32[30522,16]{1,0} %custom-call.74, u32[2048]{0} %reshape.261), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2233}
  %p14.200 = f32[2,16]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.75 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p14.200), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p13.198 = s64[16,128]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %convert.5 = u32[16,128]{1,0} convert(s64[16,128]{1,0} %p13.198)
  %reshape.260 = u32[2048]{0} reshape(u32[16,128]{1,0} %convert.5), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %gather.209 = f32[2048,16]{1,0} gather(f32[2,16]{1,0} %custom-call.75, u32[2048]{0} %reshape.260), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %add.12 = f32[2048,16]{1,0} add(f32[2048,16]{1,0} %gather.223, f32[2048,16]{1,0} %gather.209), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=235}
  %reshape.336 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %add.12), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=235}
  %p12.181 = f32[512,16]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.76 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %p12.181), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p11.177 = s64[1,512]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=218}
  %convert.4 = u32[1,512]{1,0} convert(s64[1,512]{1,0} %p11.177)
  %slice.0 = u32[1,128]{1,0} slice(u32[1,512]{1,0} %convert.4), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %reshape.259 = u32[128]{0} reshape(u32[1,128]{1,0} %slice.0), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %gather.190 = f32[128,16]{1,0} gather(f32[512,16]{1,0} %custom-call.76, u32[128]{0} %reshape.259), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1026}
  %broadcast.228 = f32[16,128,16]{2,1,0} broadcast(f32[128,16]{1,0} %gather.190), dimensions={1,2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %add.229 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.336, f32[16,128,16]{2,1,0} %broadcast.228), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %reshape.230 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.229), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.167 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.171 = f32[2048]{0} broadcast(f32[] %constant.167), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.162 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.166 = f32[2048]{0} broadcast(f32[] %constant.162), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.231 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.230, f32[2048]{0} %broadcast.171, f32[2048]{0} %broadcast.166), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.232 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.231), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.239 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.232), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p10.144 = f32[16]{0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.78 = f32[16]{0} custom-call(f32[16]{0} %p10.144), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.249 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.78), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.252 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.239, f32[16,128,16]{2,1,0} %broadcast.249), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.254 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.253, f32[16,128,16]{2,1,0} %multiply.252), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.109 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %p9.108 = s64[] parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.110 = s64[] multiply(s64[] %constant.109, s64[] %p9.108), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.111 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.112 = s64[] add(s64[] %multiply.110, s64[] %constant.111), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.119 = u64[] convert(s64[] %add.112), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.121 = u64[1]{0} reshape(u64[] %convert.119), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.35 = u64[1]{0} constant({0})
  %concatenate.123 = u64[2]{0} concatenate(u64[1]{0} %reshape.121, u64[1]{0} %constant.35), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.124 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.123), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.125 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.124), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.127 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.128 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.127), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.129 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.125, u32[16,128,16]{2,1,0} %broadcast.128), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.130 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.129), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.131 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.132 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.131), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.136 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.130, f32[16,128,16]{2,1,0} %broadcast.132), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %p8.107 = f32[] parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.116 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %compare.139 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.136, f32[16,128,16]{2,1,0} %broadcast.116), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.22 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %divide.4 = f32[] divide(f32[] %constant.22, f32[] %p8.107)
  %broadcast.41 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.4), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.33 = f32[] constant(0)
  %broadcast.66 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.33), dimensions={}
  %select.13 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.139, f32[16,128,16]{2,1,0} %broadcast.41, f32[16,128,16]{2,1,0} %broadcast.66), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.256 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.254, f32[16,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.468 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p28.459 = f32[16,16]{1,0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.79 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p28.459), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.467 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.79), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.469 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.468, f32[16,16]{0,1} %transpose.467), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.470 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.469), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p27.450 = f32[16]{0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.80 = f32[16]{0} custom-call(f32[16]{0} %p27.450), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.471 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.80), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.472 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.470, f32[16,128,16]{2,1,0} %broadcast.471), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.475 = f32[16,128,2,8]{3,2,1,0} reshape(f32[16,128,16]{2,1,0} %add.472), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.476 = f32[16,2,128,8]{3,1,2,0} transpose(f32[16,128,2,8]{3,2,1,0} %reshape.475), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.478 = f32[32,128,8]{2,1,0} reshape(f32[16,2,128,8]{3,1,2,0} %transpose.476), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.433 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p26.424 = f32[16,16]{1,0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.81 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p26.424), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.432 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.81), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.434 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.433, f32[16,16]{0,1} %transpose.432), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.435 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.434), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p25.415 = f32[16]{0} parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.82 = f32[16]{0} custom-call(f32[16]{0} %p25.415), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.436 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.82), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.437 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.435, f32[16,128,16]{2,1,0} %broadcast.436), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.440 = f32[16,128,2,8]{3,2,1,0} reshape(f32[16,128,16]{2,1,0} %add.437), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.442 = f32[16,2,8,128]{2,1,3,0} transpose(f32[16,128,2,8]{3,2,1,0} %reshape.440), dimensions={0,2,3,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.444 = f32[32,8,128]{2,1,0} reshape(f32[16,2,8,128]{2,1,3,0} %transpose.442), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %dot.479 = f32[32,128,128]{2,1,0} dot(f32[32,128,8]{2,1,0} %reshape.478, f32[32,8,128]{2,1,0} %reshape.444), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %p24.409 = f32[] parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %broadcast.146 = f32[32,128,128]{2,1,0} broadcast(f32[] %p24.409), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %divide.10 = f32[32,128,128]{2,1,0} divide(f32[32,128,128]{2,1,0} %dot.479, f32[32,128,128]{2,1,0} %broadcast.146), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %reshape.344 = f32[16,2,128,128]{3,2,1,0} reshape(f32[32,128,128]{2,1,0} %divide.10), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %constant.400 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=909}
  %broadcast.148 = f32[16,128]{1,0} broadcast(f32[] %constant.400), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=909}
  %p23.388 = s64[16,128]{1,0} parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=958}
  %convert.2 = f32[16,128]{1,0} convert(s64[16,128]{1,0} %p23.388), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=969}
  %subtract.4 = f32[16,128]{1,0} subtract(f32[16,128]{1,0} %broadcast.148, f32[16,128]{1,0} %convert.2), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/kahfi/pytorch/torch/_tensor.py" source_line=909}
  %p22.387 = f32[] parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %broadcast.150 = f32[16,128]{1,0} broadcast(f32[] %p22.387), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %multiply.23 = f32[16,128]{1,0} multiply(f32[16,128]{1,0} %subtract.4, f32[16,128]{1,0} %broadcast.150), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %broadcast.485 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[16,128]{1,0} %multiply.23), dimensions={0,3}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %add.486 = f32[16,2,128,128]{3,2,1,0} add(f32[16,2,128,128]{3,2,1,0} %reshape.344, f32[16,2,128,128]{3,2,1,0} %broadcast.485), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %constant.487 = f32[] constant(-inf), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %reduce.492 = f32[16,2,128]{2,1,0} reduce(f32[16,2,128,128]{3,2,1,0} %add.486, f32[] %constant.487), dimensions={3}, to_apply=%MaxComputation.488, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %broadcast.493 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[16,2,128]{2,1,0} %reduce.492), dimensions={0,1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %subtract.494 = f32[16,2,128,128]{3,2,1,0} subtract(f32[16,2,128,128]{3,2,1,0} %add.486, f32[16,2,128,128]{3,2,1,0} %broadcast.493), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %exponential.495 = f32[16,2,128,128]{3,2,1,0} exponential(f32[16,2,128,128]{3,2,1,0} %subtract.494), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %constant.496 = f32[] constant(0), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %reduce.501 = f32[16,2,128]{2,1,0} reduce(f32[16,2,128,128]{3,2,1,0} %exponential.495, f32[] %constant.496), dimensions={3}, to_apply=%AddComputation.497, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %broadcast.502 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[16,2,128]{2,1,0} %reduce.501), dimensions={0,1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %divide.503 = f32[16,2,128,128]{3,2,1,0} divide(f32[16,2,128,128]{3,2,1,0} %exponential.495, f32[16,2,128,128]{3,2,1,0} %broadcast.502), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1856}
  %constant.257 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.258 = s64[] multiply(s64[] %constant.257, s64[] %add.112), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.259 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.260 = s64[] add(s64[] %multiply.258, s64[] %constant.259), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.358 = u64[] convert(s64[] %add.260), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.360 = u64[1]{0} reshape(u64[] %convert.358), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.36 = u64[1]{0} constant({0})
  %concatenate.362 = u64[2]{0} concatenate(u64[1]{0} %reshape.360, u64[1]{0} %constant.36), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.363 = (u64[2]{0}, u32[16,2,128,128]{3,2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.362), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.364 = u32[16,2,128,128]{3,2,1,0} get-tuple-element((u64[2]{0}, u32[16,2,128,128]{3,2,1,0}) %rng-bit-generator.363), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.366 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.367 = u32[16,2,128,128]{3,2,1,0} broadcast(u32[] %constant.366), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.368 = u32[16,2,128,128]{3,2,1,0} shift-right-logical(u32[16,2,128,128]{3,2,1,0} %get-tuple-element.364, u32[16,2,128,128]{3,2,1,0} %broadcast.367), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.369 = f32[16,2,128,128]{3,2,1,0} convert(u32[16,2,128,128]{3,2,1,0} %shift-right-logical.368), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.370 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.371 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[] %constant.370), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.375 = f32[16,2,128,128]{3,2,1,0} multiply(f32[16,2,128,128]{3,2,1,0} %convert.369, f32[16,2,128,128]{3,2,1,0} %broadcast.371), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.355 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[] %p8.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %compare.378 = pred[16,2,128,128]{3,2,1,0} compare(f32[16,2,128,128]{3,2,1,0} %multiply.375, f32[16,2,128,128]{3,2,1,0} %broadcast.355), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.23 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %divide.5 = f32[] divide(f32[] %constant.23, f32[] %p8.107)
  %broadcast.45 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[] %divide.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.32 = f32[] constant(0)
  %broadcast.64 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[] %constant.32), dimensions={}
  %select.12 = f32[16,2,128,128]{3,2,1,0} select(pred[16,2,128,128]{3,2,1,0} %compare.378, f32[16,2,128,128]{3,2,1,0} %broadcast.45, f32[16,2,128,128]{3,2,1,0} %broadcast.64), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.504 = f32[16,2,128,128]{3,2,1,0} multiply(f32[16,2,128,128]{3,2,1,0} %divide.503, f32[16,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.506 = f32[32,128,128]{2,1,0} reshape(f32[16,2,128,128]{3,2,1,0} %multiply.504), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.341 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p21.332 = f32[16,16]{1,0} parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.83 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p21.332), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.340 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.83), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.342 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.341, f32[16,16]{0,1} %transpose.340), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.343 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.342), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p20.323 = f32[16]{0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.84 = f32[16]{0} custom-call(f32[16]{0} %p20.323), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.344 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.84), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.345 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.343, f32[16,128,16]{2,1,0} %broadcast.344), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.348 = f32[16,128,2,8]{3,2,1,0} reshape(f32[16,128,16]{2,1,0} %add.345), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %transpose.349 = f32[16,2,128,8]{3,1,2,0} transpose(f32[16,128,2,8]{3,2,1,0} %reshape.348), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.351 = f32[32,128,8]{2,1,0} reshape(f32[16,2,128,8]{3,1,2,0} %transpose.349), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %dot.507 = f32[32,128,8]{2,1,0} dot(f32[32,128,128]{2,1,0} %reshape.506, f32[32,128,8]{2,1,0} %reshape.351), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.508 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.507), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %transpose.509 = f32[16,128,2,8]{3,1,2,0} transpose(f32[16,2,128,8]{3,2,1,0} %reshape.508), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.511 = f32[2048,16]{1,0} reshape(f32[16,128,2,8]{3,1,2,0} %transpose.509), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p19.309 = f32[16,16]{1,0} parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.85 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p19.309), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.317 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.85), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.512 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.511, f32[16,16]{0,1} %transpose.317), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.513 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.512), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p18.300 = f32[16]{0} parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.86 = f32[16]{0} custom-call(f32[16]{0} %p18.300), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.514 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.86), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.515 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.513, f32[16,128,16]{2,1,0} %broadcast.514), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.261 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.262 = s64[] multiply(s64[] %constant.261, s64[] %add.260), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.263 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.264 = s64[] add(s64[] %multiply.262, s64[] %constant.263), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.271 = u64[] convert(s64[] %add.264), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.273 = u64[1]{0} reshape(u64[] %convert.271), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.37 = u64[1]{0} constant({0})
  %concatenate.275 = u64[2]{0} concatenate(u64[1]{0} %reshape.273, u64[1]{0} %constant.37), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.276 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.275), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.277 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.276), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.279 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.280 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.279), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.281 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.277, u32[16,128,16]{2,1,0} %broadcast.280), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.282 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.281), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.283 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.284 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.283), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.288 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.282, f32[16,128,16]{2,1,0} %broadcast.284), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.268 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %compare.291 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.288, f32[16,128,16]{2,1,0} %broadcast.268), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.24 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %divide.6 = f32[] divide(f32[] %constant.24, f32[] %p8.107)
  %broadcast.46 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.6), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.31 = f32[] constant(0)
  %broadcast.63 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.31), dimensions={}
  %select.11 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.291, f32[16,128,16]{2,1,0} %broadcast.46, f32[16,128,16]{2,1,0} %broadcast.63), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.518 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.515, f32[16,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.519 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %multiply.518, f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=388}
  %reshape.520 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.519), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.97 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.101 = f32[2048]{0} broadcast(f32[] %constant.97), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.92 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.96 = f32[2048]{0} broadcast(f32[] %constant.92), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.521 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.520, f32[2048]{0} %broadcast.101, f32[2048]{0} %broadcast.96), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.522 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.521), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.529 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.522), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p7.74 = f32[16]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.87 = f32[16]{0} custom-call(f32[16]{0} %p7.74), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.539 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.87), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.542 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.529, f32[16,128,16]{2,1,0} %broadcast.539), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.544 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.543, f32[16,128,16]{2,1,0} %multiply.542), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.626 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.544), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p33.617 = f32[4096,16]{1,0} parameter(33), frontend_attributes={neff_input_names="input33"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.88 = f32[4096,16]{1,0} custom-call(f32[4096,16]{1,0} %p33.617), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.625 = f32[16,4096]{0,1} transpose(f32[4096,16]{1,0} %custom-call.88), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.627 = f32[2048,4096]{1,0} dot(f32[2048,16]{1,0} %reshape.626, f32[16,4096]{0,1} %transpose.625), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.628 = f32[16,128,4096]{2,1,0} reshape(f32[2048,4096]{1,0} %dot.627), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p32.608 = f32[4096]{0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.89 = f32[4096]{0} custom-call(f32[4096]{0} %p32.608), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.629 = f32[16,128,4096]{2,1,0} broadcast(f32[4096]{0} %custom-call.89), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.630 = f32[16,128,4096]{2,1,0} add(f32[16,128,4096]{2,1,0} %reshape.628, f32[16,128,4096]{2,1,0} %broadcast.629), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.90 = f32[16,128,4096]{2,1,0} custom-call(f32[16,128,4096]{2,1,0} %add.630), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.640 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %custom-call.90), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p31.594 = f32[16,4096]{1,0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.91 = f32[16,4096]{1,0} custom-call(f32[16,4096]{1,0} %p31.594), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.602 = f32[4096,16]{0,1} transpose(f32[16,4096]{1,0} %custom-call.91), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.641 = f32[2048,16]{1,0} dot(f32[2048,4096]{1,0} %reshape.640, f32[4096,16]{0,1} %transpose.602), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.642 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.641), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p30.585 = f32[16]{0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.92 = f32[16]{0} custom-call(f32[16]{0} %p30.585), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.643 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.92), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.644 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.642, f32[16,128,16]{2,1,0} %broadcast.643), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.546 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.547 = s64[] multiply(s64[] %constant.546, s64[] %add.264), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.548 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.549 = s64[] add(s64[] %multiply.547, s64[] %constant.548), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.556 = u64[] convert(s64[] %add.549), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %reshape.558 = u64[1]{0} reshape(u64[] %convert.556), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.40 = u64[1]{0} constant({0})
  %concatenate.560 = u64[2]{0} concatenate(u64[1]{0} %reshape.558, u64[1]{0} %constant.40), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.561 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.560), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.562 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.561), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.564 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.565 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.564), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.566 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.562, u32[16,128,16]{2,1,0} %broadcast.565), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %convert.567 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.566), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.568 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.569 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.568), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.573 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.567, f32[16,128,16]{2,1,0} %broadcast.569), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %broadcast.553 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %compare.576 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.573, f32[16,128,16]{2,1,0} %broadcast.553), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.25 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %divide.7 = f32[] divide(f32[] %constant.25, f32[] %p8.107)
  %broadcast.47 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.7), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %constant.30 = f32[] constant(0)
  %broadcast.61 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.30), dimensions={}
  %select.10 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.576, f32[16,128,16]{2,1,0} %broadcast.47, f32[16,128,16]{2,1,0} %broadcast.61), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %multiply.647 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.644, f32[16,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1266}
  %add.648 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %multiply.647, f32[16,128,16]{2,1,0} %add.544), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=466}
  %reshape.649 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.648), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.63 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.67 = f32[2048]{0} broadcast(f32[] %constant.63), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.58 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.62 = f32[2048]{0} broadcast(f32[] %constant.58), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.650 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.649, f32[2048]{0} %broadcast.67, f32[2048]{0} %broadcast.62), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.651 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.650), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.658 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.651), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p6.40 = f32[16]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.93 = f32[16]{0} custom-call(f32[16]{0} %p6.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.668 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.93), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.671 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.658, f32[16,128,16]{2,1,0} %broadcast.668), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.673 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.672, f32[16,128,16]{2,1,0} %multiply.671), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.830 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.673), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p39.821 = f32[16,16]{1,0} parameter(39), frontend_attributes={neff_input_names="input39"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.94 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p39.821), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.829 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.94), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.831 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.830, f32[16,16]{0,1} %transpose.829), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.832 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.831), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p38.812 = f32[16]{0} parameter(38), frontend_attributes={neff_input_names="input38"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.95 = f32[16]{0} custom-call(f32[16]{0} %p38.812), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.833 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.95), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.834 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.832, f32[16,128,16]{2,1,0} %broadcast.833), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.96 = f32[16,128,16]{2,1,0} custom-call(f32[16,128,16]{2,1,0} %add.834), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.844 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %custom-call.96), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.802 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.806 = f32[2048]{0} broadcast(f32[] %constant.802), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.797 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.801 = f32[2048]{0} broadcast(f32[] %constant.797), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.845 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.844, f32[2048]{0} %broadcast.806, f32[2048]{0} %broadcast.801), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.846 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.845), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.853 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.846), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %p37.779 = f32[16]{0} parameter(37), frontend_attributes={neff_input_names="input37"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.98 = f32[16]{0} custom-call(f32[16]{0} %p37.779), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.863 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.98), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.866 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.853, f32[16,128,16]{2,1,0} %broadcast.863), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.868 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.867, f32[16,128,16]{2,1,0} %multiply.866), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %reshape.869 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.868), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.99 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p16.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.777 = f32[16,30522]{0,1} transpose(f32[30522,16]{1,0} %custom-call.99), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.870 = f32[2048,30522]{1,0} dot(f32[2048,16]{1,0} %reshape.869, f32[16,30522]{0,1} %transpose.777), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.871 = f32[16,128,30522]{2,1,0} reshape(f32[2048,30522]{1,0} %dot.870), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p36.761 = f32[30522]{0} parameter(36), frontend_attributes={neff_input_names="input36"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.100 = f32[30522]{0} custom-call(f32[30522]{0} %p36.761), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.872 = f32[16,128,30522]{2,1,0} broadcast(f32[30522]{0} %custom-call.100), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.873 = f32[16,128,30522]{2,1,0} add(f32[16,128,30522]{2,1,0} %reshape.871, f32[16,128,30522]{2,1,0} %broadcast.872), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.876 = f32[2048,30522]{1,0} reshape(f32[16,128,30522]{2,1,0} %add.873), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.0 = f32[] constant(-inf)
  %reduce.0 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %reshape.876, f32[] %constant.0), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.877
  %broadcast.0 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %reduce.0), dimensions={0}
  %subtract.0 = f32[2048,30522]{1,0} subtract(f32[2048,30522]{1,0} %reshape.876, f32[2048,30522]{1,0} %broadcast.0)
  %exponential.0 = f32[2048,30522]{1,0} exponential(f32[2048,30522]{1,0} %subtract.0)
  %constant.2 = f32[] constant(0)
  %reduce.1 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %exponential.0, f32[] %constant.2), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.881
  %log.0 = f32[2048]{0} log(f32[2048]{0} %reduce.1)
  %broadcast.1 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %log.0), dimensions={0}
  %subtract.1 = f32[2048,30522]{1,0} subtract(f32[2048,30522]{1,0} %subtract.0, f32[2048,30522]{1,0} %broadcast.1), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1 = s64[2048]{0} reshape(s64[16,128]{1,0} %p35.754)
  %broadcast.3 = s64[2048,30522]{1,0} broadcast(s64[2048]{0} %reshape.1), dimensions={0}
  %iota.5 = s64[2048,30522]{1,0} iota(), iota_dimension=1
  %compare.0 = pred[2048,30522]{1,0} compare(s64[2048,30522]{1,0} %broadcast.3, s64[2048,30522]{1,0} %iota.5), direction=EQ
  %constant.4 = f32[] constant(1)
  %broadcast.6 = f32[2048,30522]{1,0} broadcast(f32[] %constant.4), dimensions={}
  %constant.5 = f32[] constant(0)
  %broadcast.7 = f32[2048,30522]{1,0} broadcast(f32[] %constant.5), dimensions={}
  %select.0 = f32[2048,30522]{1,0} select(pred[2048,30522]{1,0} %compare.0, f32[2048,30522]{1,0} %broadcast.6, f32[2048,30522]{1,0} %broadcast.7)
  %multiply.2 = f32[2048,30522]{1,0} multiply(f32[2048,30522]{1,0} %subtract.1, f32[2048,30522]{1,0} %select.0)
  %reduce.2 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %multiply.2, f32[] %constant.2), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.885
  %constant.26 = f32[] constant(0)
  %broadcast.48 = f32[2048]{0} broadcast(f32[] %constant.26), dimensions={}
  %select.6 = f32[2048]{0} select(pred[2048]{0} %reshape.350, f32[2048]{0} %reduce.2, f32[2048]{0} %broadcast.48)
  %reduce.3 = f32[] reduce(f32[2048]{0} %select.6, f32[] %constant.2), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.889
  %convert.0 = f32[2048]{0} convert(pred[2048]{0} %reshape.350), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.4 = f32[] reduce(f32[2048]{0} %convert.0, f32[] %constant.2), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.893
  %divide.0 = f32[] divide(f32[] %reduce.3, f32[] %reduce.4)
  %negate.0 = f32[] negate(f32[] %divide.0), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p1.4 = s64[16]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1135}
  %constant.13 = s64[] constant(-100)
  %broadcast.25 = s64[16]{0} broadcast(s64[] %constant.13), dimensions={}
  %compare.4 = pred[16]{0} compare(s64[16]{0} %p1.4, s64[16]{0} %broadcast.25), direction=NE
  %slice.675 = f32[16,1,16]{2,1,0} slice(f32[16,128,16]{2,1,0} %add.673), slice={[0:16], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %reshape.676 = f32[16,16]{1,0} reshape(f32[16,1,16]{2,1,0} %slice.675), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p5.30 = f32[16,16]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.102 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p5.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.38 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.102), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.677 = f32[16,16]{1,0} dot(f32[16,16]{1,0} %reshape.676, f32[16,16]{0,1} %transpose.38), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p4.22 = f32[16]{0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.103 = f32[16]{0} custom-call(f32[16]{0} %p4.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.681 = f32[16,16]{1,0} broadcast(f32[16]{0} %custom-call.103), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.682 = f32[16,16]{1,0} add(f32[16,16]{1,0} %dot.677, f32[16,16]{1,0} %broadcast.681), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %tanh.683 = f32[16,16]{1,0} tanh(f32[16,16]{1,0} %add.682), metadata={op_type="aten__tanh" op_name="aten__tanh" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/activation.py" source_line=356}
  %p3.13 = f32[2,16]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.104 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p3.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.21 = f32[16,2]{0,1} transpose(f32[2,16]{1,0} %custom-call.104), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.684 = f32[16,2]{1,0} dot(f32[16,16]{1,0} %tanh.683, f32[16,2]{0,1} %transpose.21), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p2.5 = f32[2]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.105 = f32[2]{0} custom-call(f32[2]{0} %p2.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.688 = f32[16,2]{1,0} broadcast(f32[2]{0} %custom-call.105), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.689 = f32[16,2]{1,0} add(f32[16,2]{1,0} %dot.684, f32[16,2]{1,0} %broadcast.688), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.9 = f32[] constant(-inf)
  %reduce.6 = f32[16]{0} reduce(f32[16,2]{1,0} %add.689, f32[] %constant.9), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.690
  %broadcast.17 = f32[16,2]{1,0} broadcast(f32[16]{0} %reduce.6), dimensions={0}
  %subtract.2 = f32[16,2]{1,0} subtract(f32[16,2]{1,0} %add.689, f32[16,2]{1,0} %broadcast.17)
  %exponential.2 = f32[16,2]{1,0} exponential(f32[16,2]{1,0} %subtract.2)
  %constant.10 = f32[] constant(0)
  %reduce.7 = f32[16]{0} reduce(f32[16,2]{1,0} %exponential.2, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.694
  %log.1 = f32[16]{0} log(f32[16]{0} %reduce.7)
  %broadcast.18 = f32[16,2]{1,0} broadcast(f32[16]{0} %log.1), dimensions={0}
  %subtract.3 = f32[16,2]{1,0} subtract(f32[16,2]{1,0} %subtract.2, f32[16,2]{1,0} %broadcast.18), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.20 = s64[16,2]{1,0} broadcast(s64[16]{0} %p1.4), dimensions={0}
  %iota.7 = s64[16,2]{1,0} iota(), iota_dimension=1
  %compare.3 = pred[16,2]{1,0} compare(s64[16,2]{1,0} %broadcast.20, s64[16,2]{1,0} %iota.7), direction=EQ
  %constant.11 = f32[] constant(1)
  %broadcast.23 = f32[16,2]{1,0} broadcast(f32[] %constant.11), dimensions={}
  %constant.12 = f32[] constant(0)
  %broadcast.24 = f32[16,2]{1,0} broadcast(f32[] %constant.12), dimensions={}
  %select.2 = f32[16,2]{1,0} select(pred[16,2]{1,0} %compare.3, f32[16,2]{1,0} %broadcast.23, f32[16,2]{1,0} %broadcast.24)
  %multiply.7 = f32[16,2]{1,0} multiply(f32[16,2]{1,0} %subtract.3, f32[16,2]{1,0} %select.2)
  %reduce.8 = f32[16]{0} reduce(f32[16,2]{1,0} %multiply.7, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.698
  %constant.27 = f32[] constant(0)
  %broadcast.49 = f32[16]{0} broadcast(f32[] %constant.27), dimensions={}
  %select.7 = f32[16]{0} select(pred[16]{0} %compare.4, f32[16]{0} %reduce.8, f32[16]{0} %broadcast.49)
  %reduce.9 = f32[] reduce(f32[16]{0} %select.7, f32[] %constant.10), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.702
  %convert.1 = f32[16]{0} convert(pred[16]{0} %compare.4), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.10 = f32[] reduce(f32[16]{0} %convert.1, f32[] %constant.10), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.706
  %divide.2 = f32[] divide(f32[] %reduce.9, f32[] %reduce.10)
  %negate.2 = f32[] negate(f32[] %divide.2), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.940 = f32[] add(f32[] %negate.0, f32[] %negate.2), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/xla-explore-env/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1136}
  %p0.2 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=349}
  %divide.941 = f32[] divide(f32[] %add.940, f32[] %p0.2), metadata={op_type="aten__div" op_name="aten__div" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=349}
  %reshape.139 = f32[1]{0} reshape(f32[] %divide.941), metadata={op_type="aten__add" op_name="aten__add" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=351}
  %add.945 = f32[1]{0} add(f32[1]{0} %p41.943, f32[1]{0} %reshape.139), metadata={op_type="aten__add" op_name="aten__add" source_file="dp_bert_large_hf_pretrain_hdf5.py" source_line=351}
  %exponential.3 = f32[16,2]{1,0} exponential(f32[16,2]{1,0} %subtract.3)
  %constant.947 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/kahfi/pytorch/torch/autograd/__init__.py" source_line=127}
  %constant.14 = f32[] constant(0)
  %reduce.11 = f32[] reduce(f32[16]{0} %convert.1, f32[] %constant.14), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.950
  %multiply.16 = f32[] multiply(f32[] %p0.2, f32[] %reduce.11)
  %divide.3 = f32[] divide(f32[] %constant.947, f32[] %multiply.16)
  %broadcast.26 = f32[16]{0} broadcast(f32[] %divide.3), dimensions={}
  %constant.28 = f32[] constant(0)
  %broadcast.51 = f32[16]{0} broadcast(f32[] %constant.28), dimensions={}
  %select.8 = f32[16]{0} select(pred[16]{0} %compare.4, f32[16]{0} %broadcast.26, f32[16]{0} %broadcast.51)
  %broadcast.27 = f32[16,2]{1,0} broadcast(f32[16]{0} %select.8), dimensions={0}
  %multiply.10 = f32[16,2]{1,0} multiply(f32[16,2]{1,0} %exponential.3, f32[16,2]{1,0} %broadcast.27)
  %broadcast.29 = s64[16,2]{1,0} broadcast(s64[16]{0} %p1.4), dimensions={0}
  %iota.9 = s64[16,2]{1,0} iota(), iota_dimension=1
  %compare.5 = pred[16,2]{1,0} compare(s64[16,2]{1,0} %broadcast.29, s64[16,2]{1,0} %iota.9), direction=EQ
  %negate.3 = f32[] negate(f32[] %divide.3)
  %broadcast.32 = f32[16,2]{1,0} broadcast(f32[] %negate.3), dimensions={}
  %constant.15 = f32[] constant(0)
  %broadcast.33 = f32[16,2]{1,0} broadcast(f32[] %constant.15), dimensions={}
  %select.3 = f32[16,2]{1,0} select(pred[16,2]{1,0} %compare.5, f32[16,2]{1,0} %broadcast.32, f32[16,2]{1,0} %broadcast.33)
  %add.1 = f32[16,2]{1,0} add(f32[16,2]{1,0} %multiply.10, f32[16,2]{1,0} %select.3), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.983 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.989 = f32[2]{0} reduce(f32[16,2]{1,0} %add.1, f32[] %constant.983), dimensions={0}, to_apply=%AddComputation.985, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.107 = f32[2]{0} custom-call(f32[2]{0} %reduce.989), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.999 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %tanh.683), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[2,16]{0,1} dot(f32[16,2]{1,0} %add.1, f32[16,16]{0,1} %transpose.999), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.108 = f32[2,16]{1,0} custom-call(f32[2,16]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %exponential.1 = f32[2048,30522]{1,0} exponential(f32[2048,30522]{1,0} %subtract.1)
  %constant.7 = f32[] constant(0)
  %reduce.5 = f32[] reduce(f32[2048]{0} %convert.0, f32[] %constant.7), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.1009
  %multiply.17 = f32[] multiply(f32[] %p0.2, f32[] %reduce.5)
  %divide.1 = f32[] divide(f32[] %constant.947, f32[] %multiply.17)
  %broadcast.9 = f32[2048]{0} broadcast(f32[] %divide.1), dimensions={}
  %constant.29 = f32[] constant(0)
  %broadcast.53 = f32[2048]{0} broadcast(f32[] %constant.29), dimensions={}
  %select.9 = f32[2048]{0} select(pred[2048]{0} %reshape.350, f32[2048]{0} %broadcast.9, f32[2048]{0} %broadcast.53)
  %broadcast.10 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %select.9), dimensions={0}
  %multiply.5 = f32[2048,30522]{1,0} multiply(f32[2048,30522]{1,0} %exponential.1, f32[2048,30522]{1,0} %broadcast.10)
  %reshape.4 = s64[2048]{0} reshape(s64[16,128]{1,0} %p35.754)
  %broadcast.12 = s64[2048,30522]{1,0} broadcast(s64[2048]{0} %reshape.4), dimensions={0}
  %iota.11 = s64[2048,30522]{1,0} iota(), iota_dimension=1
  %compare.2 = pred[2048,30522]{1,0} compare(s64[2048,30522]{1,0} %broadcast.12, s64[2048,30522]{1,0} %iota.11), direction=EQ
  %negate.1 = f32[] negate(f32[] %divide.1)
  %broadcast.15 = f32[2048,30522]{1,0} broadcast(f32[] %negate.1), dimensions={}
  %constant.8 = f32[] constant(0)
  %broadcast.16 = f32[2048,30522]{1,0} broadcast(f32[] %constant.8), dimensions={}
  %select.1 = f32[2048,30522]{1,0} select(pred[2048,30522]{1,0} %compare.2, f32[2048,30522]{1,0} %broadcast.15, f32[2048,30522]{1,0} %broadcast.16)
  %add.0 = f32[2048,30522]{1,0} add(f32[2048,30522]{1,0} %multiply.5, f32[2048,30522]{1,0} %select.1), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1043 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1049 = f32[30522]{0} reduce(f32[2048,30522]{1,0} %add.0, f32[] %constant.1043), dimensions={0}, to_apply=%AddComputation.1045, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.109 = f32[30522]{0} custom-call(f32[30522]{0} %reduce.1049), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1395 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.868), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1396 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1395), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[30522,16]{0,1} dot(f32[2048,30522]{1,0} %add.0, f32[16,2048]{0,1} %transpose.1396), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.110 = f32[30522,16]{1,0} custom-call(f32[30522,16]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1375 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1379 = f32[30522,16]{1,0} broadcast(f32[] %constant.1375), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1354 = s64[2048]{0} reshape(s64[16,128]{1,0} %p15.212), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1369 = s64[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1370 = s64[2048]{0} broadcast(s64[] %constant.1369), dimensions={}, metadata={op_type="aten__lt" op_name="aten__lt"}
  %compare.1371 = pred[2048]{0} compare(s64[2048]{0} %reshape.1354, s64[2048]{0} %broadcast.1370), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt"}
  %p42.1363 = s64[] parameter(42), frontend_attributes={neff_input_names="input42"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.1367 = s64[2048]{0} broadcast(s64[] %p42.1363), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %add.1368 = s64[2048]{0} add(s64[2048]{0} %reshape.1354, s64[2048]{0} %broadcast.1367), metadata={op_type="aten__add" op_name="aten__add"}
  %select.1372 = s64[2048]{0} select(pred[2048]{0} %compare.1371, s64[2048]{0} %add.1368, s64[2048]{0} %reshape.1354), metadata={op_type="aten__where" op_name="aten__where"}
  %reshape.1373 = s64[2048,1]{1,0} reshape(s64[2048]{0} %select.1372), metadata={op_type="aten__stack" op_name="aten__stack"}
  %convert.1355 = f32[2048]{0} convert(s64[2048]{0} %reshape.1354), metadata={op_type="aten__ne" op_name="aten__ne"}
  %constant.1353 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1356 = f32[2048]{0} broadcast(f32[] %constant.1353), dimensions={}, metadata={op_type="aten__ne" op_name="aten__ne"}
  %compare.1357 = pred[2048]{0} compare(f32[2048]{0} %convert.1355, f32[2048]{0} %broadcast.1356), direction=NE, metadata={op_type="aten__ne" op_name="aten__ne"}
  %broadcast.1361 = pred[2048,16]{1,0} broadcast(pred[2048]{0} %compare.1357), dimensions={0}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %constant.1069 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1073 = f32[2048]{0} broadcast(f32[] %constant.1069), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.233 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.231), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.234 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.231), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.235 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.236 = f32[2048]{0} broadcast(f32[] %constant.235), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.237 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.234, f32[2048]{0} %broadcast.236), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %sqrt = f32[2048]{0} sqrt(f32[2048]{0} %add.237), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.1344 = f32[2048]{0} multiply(f32[2048]{0} %sqrt, f32[2048]{0} %sqrt), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.43 = f32[] constant(-1e-12)
  %broadcast.54 = f32[2048]{0} broadcast(f32[] %constant.43), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.8 = f32[2048]{0} add(f32[2048]{0} %multiply.1344, f32[2048]{0} %broadcast.54), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1093 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1097 = f32[2048]{0} broadcast(f32[] %constant.1093), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.523 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.521), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.524 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.521), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.525 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.526 = f32[2048]{0} broadcast(f32[] %constant.525), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.527 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.524, f32[2048]{0} %broadcast.526), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %sqrt.1 = f32[2048]{0} sqrt(f32[2048]{0} %add.527), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.1259 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.1, f32[2048]{0} %sqrt.1), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.44 = f32[] constant(-1e-12)
  %broadcast.56 = f32[2048]{0} broadcast(f32[] %constant.44), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.9 = f32[2048]{0} add(f32[2048]{0} %multiply.1259, f32[2048]{0} %broadcast.56), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1113 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1117 = f32[2048]{0} broadcast(f32[] %constant.1113), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.652 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.650), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.653 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.650), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.654 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.655 = f32[2048]{0} broadcast(f32[] %constant.654), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.656 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.653, f32[2048]{0} %broadcast.655), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %sqrt.2 = f32[2048]{0} sqrt(f32[2048]{0} %add.656), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.1225 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.2, f32[2048]{0} %sqrt.2), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.45 = f32[] constant(-1e-12)
  %broadcast.58 = f32[2048]{0} broadcast(f32[] %constant.45), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.10 = f32[2048]{0} add(f32[2048]{0} %multiply.1225, f32[2048]{0} %broadcast.58), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1172 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1176 = f32[2048]{0} broadcast(f32[] %constant.1172), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.847 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.845), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.848 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.845), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %constant.849 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %broadcast.850 = f32[2048]{0} broadcast(f32[] %constant.849), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %add.851 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.848, f32[2048]{0} %broadcast.850), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %sqrt.3 = f32[2048]{0} sqrt(f32[2048]{0} %add.851), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2543}
  %multiply.1196 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.3, f32[2048]{0} %sqrt.3), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.46 = f32[] constant(-1e-12)
  %broadcast.59 = f32[2048]{0} broadcast(f32[] %constant.46), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.11 = f32[2048]{0} add(f32[2048]{0} %multiply.1196, f32[2048]{0} %broadcast.59), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %dot.1187 = f32[2048,16]{1,0} dot(f32[2048,30522]{1,0} %add.0, f32[30522,16]{1,0} %custom-call.99), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1188 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1187), metadata={op_type="aten__view" op_name="aten__view"}
  %broadcast.1189 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.98), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1190 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1188, f32[16,128,16]{2,1,0} %broadcast.1189), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1191 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1190), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1199 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.844, f32[2048]{0} %broadcast.1176, f32[2048]{0} %get-tuple-element.847, f32[2048]{0} %add.11, f32[1,2048,16]{2,1,0} %reshape.1191), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1200 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1199), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1203 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.101 = f32[16,128,16]{2,1,0} custom-call(f32[16,128,16]{2,1,0} %add.834), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.6 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1203, f32[16,128,16]{2,1,0} %custom-call.101), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1214 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.6), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1215 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.1214, f32[16,16]{1,0} %custom-call.94), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1216 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1215), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1151 = f32[16,16]{1,0} dot(f32[16,2]{1,0} %add.1, f32[2,16]{1,0} %custom-call.104), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1143 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1147 = f32[16,16]{1,0} broadcast(f32[] %constant.1143), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %multiply.1142 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %tanh.683, f32[16,16]{1,0} %tanh.683), metadata={op_type="aten__pow" op_name="aten__pow"}
  %subtract.1148 = f32[16,16]{1,0} subtract(f32[16,16]{1,0} %broadcast.1147, f32[16,16]{1,0} %multiply.1142), metadata={op_type="aten__sub" op_name="aten__sub"}
  %multiply.1152 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %dot.1151, f32[16,16]{1,0} %subtract.1148), metadata={op_type="aten__mul" op_name="aten__mul"}
  %dot.1153 = f32[16,16]{1,0} dot(f32[16,16]{1,0} %multiply.1152, f32[16,16]{1,0} %custom-call.102), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1154 = f32[16,1,16]{2,1,0} reshape(f32[16,16]{1,0} %dot.1153), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.47 = f32[] constant(0)
  %pad = f32[16,128,16]{2,1,0} pad(f32[16,1,16]{2,1,0} %reshape.1154, f32[] %constant.47), padding=0_0x0_127x0_0, metadata={op_type="xla__update_slice" op_name="xla__update_slice"}
  %add.1217 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1216, f32[16,128,16]{2,1,0} %pad), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1218 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.93), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1219 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1217, f32[16,128,16]{2,1,0} %broadcast.1218), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1220 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1219), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1228 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.649, f32[2048]{0} %broadcast.1117, f32[2048]{0} %get-tuple-element.652, f32[2048]{0} %add.10, f32[1,2048,16]{2,1,0} %reshape.1220), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1229 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1228), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1232 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1229), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1233 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1232, f32[16,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1234 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1233), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1235 = f32[2048,4096]{1,0} dot(f32[2048,16]{1,0} %reshape.1234, f32[16,4096]{1,0} %custom-call.91), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1236 = f32[16,128,4096]{2,1,0} reshape(f32[2048,4096]{1,0} %dot.1235), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.106 = f32[16,128,4096]{2,1,0} custom-call(f32[16,128,4096]{2,1,0} %add.630), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.11 = f32[16,128,4096]{2,1,0} multiply(f32[16,128,4096]{2,1,0} %reshape.1236, f32[16,128,4096]{2,1,0} %custom-call.106), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1247 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %multiply.11), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1248 = f32[2048,16]{1,0} dot(f32[2048,4096]{1,0} %reshape.1247, f32[4096,16]{1,0} %custom-call.88), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1249 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1248), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1251 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1232, f32[16,128,16]{2,1,0} %reshape.1249), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1252 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.87), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1253 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1251, f32[16,128,16]{2,1,0} %broadcast.1252), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1254 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1253), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1262 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.520, f32[2048]{0} %broadcast.1097, f32[2048]{0} %get-tuple-element.523, f32[2048]{0} %add.9, f32[1,2048,16]{2,1,0} %reshape.1254), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1263 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1262), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1266 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1263), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.1323 = f32[32,128,128]{2,1,0} reshape(f32[16,2,128,128]{3,2,1,0} %multiply.504), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1324 = f32[32,128,128]{1,2,0} transpose(f32[32,128,128]{2,1,0} %reshape.1323), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %multiply.1267 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1266, f32[16,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1268 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1267), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1269 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.1268, f32[16,16]{1,0} %custom-call.85), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1271 = f32[16,128,2,8]{3,2,1,0} reshape(f32[2048,16]{1,0} %dot.1269), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1272 = f32[16,2,128,8]{3,1,2,0} transpose(f32[16,128,2,8]{3,2,1,0} %reshape.1271), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1273 = f32[32,128,8]{2,1,0} reshape(f32[16,2,128,8]{3,1,2,0} %transpose.1272), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1325 = f32[32,128,8]{2,1,0} dot(f32[32,128,128]{1,2,0} %transpose.1324, f32[32,128,8]{2,1,0} %reshape.1273), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1326 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.1325), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1327 = f32[16,128,2,8]{3,1,2,0} transpose(f32[16,2,128,8]{3,2,1,0} %reshape.1326), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1329 = f32[2048,16]{1,0} reshape(f32[16,128,2,8]{3,1,2,0} %transpose.1327), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1330 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.1329, f32[16,16]{1,0} %custom-call.83), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1331 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1330), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1333 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1266, f32[16,128,16]{2,1,0} %reshape.1331), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1305 = f32[32,128,8]{2,1,0} reshape(f32[16,2,128,8]{3,1,2,0} %transpose.476), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1306 = f32[32,8,128]{1,2,0} transpose(f32[32,128,8]{2,1,0} %reshape.1305), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.1089 = f32[32,128,8]{2,1,0} reshape(f32[16,2,128,8]{3,1,2,0} %transpose.349), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1090 = f32[32,8,128]{1,2,0} transpose(f32[32,128,8]{2,1,0} %reshape.1089), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1274 = f32[32,128,128]{2,1,0} dot(f32[32,128,8]{2,1,0} %reshape.1273, f32[32,8,128]{1,2,0} %transpose.1090), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1275 = f32[16,2,128,128]{3,2,1,0} reshape(f32[32,128,128]{2,1,0} %dot.1274), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1276 = f32[16,2,128,128]{3,2,1,0} multiply(f32[16,2,128,128]{3,2,1,0} %reshape.1275, f32[16,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1277 = f32[16,2,128,128]{3,2,1,0} multiply(f32[16,2,128,128]{3,2,1,0} %multiply.1276, f32[16,2,128,128]{3,2,1,0} %divide.503), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %constant.1278 = f32[] constant(0), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reduce.1283 = f32[16,2,128]{2,1,0} reduce(f32[16,2,128,128]{3,2,1,0} %multiply.1277, f32[] %constant.1278), dimensions={3}, to_apply=%AddComputation.1279, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1284 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[16,2,128]{2,1,0} %reduce.1283), dimensions={0,1,2}, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %subtract.1285 = f32[16,2,128,128]{3,2,1,0} subtract(f32[16,2,128,128]{3,2,1,0} %multiply.1276, f32[16,2,128,128]{3,2,1,0} %broadcast.1284), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %multiply.1286 = f32[16,2,128,128]{3,2,1,0} multiply(f32[16,2,128,128]{3,2,1,0} %divide.503, f32[16,2,128,128]{3,2,1,0} %subtract.1285), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1287 = f32[16,2,128,128]{3,2,1,0} broadcast(f32[] %p24.409), dimensions={}, metadata={op_type="aten__div" op_name="aten__div"}
  %divide.1288 = f32[16,2,128,128]{3,2,1,0} divide(f32[16,2,128,128]{3,2,1,0} %multiply.1286, f32[16,2,128,128]{3,2,1,0} %broadcast.1287), metadata={op_type="aten__div" op_name="aten__div"}
  %reshape.1289 = f32[32,128,128]{2,1,0} reshape(f32[16,2,128,128]{3,2,1,0} %divide.1288), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1307 = f32[32,8,128]{2,1,0} dot(f32[32,8,128]{1,2,0} %transpose.1306, f32[32,128,128]{2,1,0} %reshape.1289), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1308 = f32[16,2,8,128]{3,2,1,0} reshape(f32[32,8,128]{2,1,0} %dot.1307), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1310 = f32[16,128,2,8]{1,3,2,0} transpose(f32[16,2,8,128]{3,2,1,0} %reshape.1308), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1312 = f32[2048,16]{1,0} reshape(f32[16,128,2,8]{1,3,2,0} %transpose.1310), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1313 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.1312, f32[16,16]{1,0} %custom-call.81), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1314 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1313), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1334 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %add.1333, f32[16,128,16]{2,1,0} %reshape.1314), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1087 = f32[32,8,128]{2,1,0} reshape(f32[16,2,8,128]{2,1,3,0} %transpose.442), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1088 = f32[32,128,8]{1,2,0} transpose(f32[32,8,128]{2,1,0} %reshape.1087), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1290 = f32[32,128,8]{2,1,0} dot(f32[32,128,128]{2,1,0} %reshape.1289, f32[32,128,8]{1,2,0} %transpose.1088), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1291 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.1290), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1292 = f32[16,128,2,8]{3,1,2,0} transpose(f32[16,2,128,8]{3,2,1,0} %reshape.1291), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1294 = f32[2048,16]{1,0} reshape(f32[16,128,2,8]{3,1,2,0} %transpose.1292), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1295 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.1294, f32[16,16]{1,0} %custom-call.79), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1296 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1295), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1335 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %add.1334, f32[16,128,16]{2,1,0} %reshape.1296), metadata={op_type="aten__add" op_name="aten__add"}
  %multiply.1336 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1335, f32[16,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.1337 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.78), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1338 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %multiply.1336, f32[16,128,16]{2,1,0} %broadcast.1337), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1339 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1338), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1347 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.230, f32[2048]{0} %broadcast.1073, f32[2048]{0} %get-tuple-element.233, f32[2048]{0} %add.8, f32[1,2048,16]{2,1,0} %reshape.1339), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1348 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1347), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1352 = f32[2048,16]{1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1348), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1064 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1068 = f32[2048,16]{1,0} broadcast(f32[] %constant.1064), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %select.1362 = f32[2048,16]{1,0} select(pred[2048,16]{1,0} %broadcast.1361, f32[2048,16]{1,0} %reshape.1352, f32[2048,16]{1,0} %broadcast.1068), metadata={op_type="aten__where" op_name="aten__where"}
  %scatter.1385 = f32[30522,16]{1,0} scatter(f32[30522,16]{1,0} %broadcast.1379, s64[2048,1]{1,0} %reshape.1373, f32[2048,16]{1,0} %select.1362), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%ScatterCombiner.1381, metadata={op_type="aten__index_put" op_name="aten__index_put"}
  %custom-call.111 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %scatter.1385), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1406 = f32[30522,16]{1,0} add(f32[30522,16]{1,0} %custom-call.110, f32[30522,16]{1,0} %custom-call.111), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1407 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1413 = f32[16]{0} reduce(f32[2048,16]{1,0} %dot.1187, f32[] %constant.1407), dimensions={0}, to_apply=%AddComputation.1409, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.112 = f32[16]{0} custom-call(f32[16]{0} %reduce.1413), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1429 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1188, f32[16,128,16]{2,1,0} %reshape.853), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1430 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1436 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1429, f32[] %constant.1430), dimensions={0,1}, to_apply=%AddComputation.1432, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.113 = f32[16]{0} custom-call(f32[16]{0} %reduce.1436), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1446 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1452 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.6, f32[] %constant.1446), dimensions={0,1}, to_apply=%AddComputation.1448, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.114 = f32[16]{0} custom-call(f32[16]{0} %reduce.1452), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1462 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.673), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1463 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1462), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.1214, f32[16,2048]{0,1} %transpose.1463), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.115 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1473 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1479 = f32[16]{0} reduce(f32[16,16]{1,0} %multiply.1152, f32[] %constant.1473), dimensions={0}, to_apply=%AddComputation.1475, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.116 = f32[16]{0} custom-call(f32[16]{0} %reduce.1479), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %slice.1490 = f32[16,1,16]{2,1,0} slice(f32[16,128,16]{2,1,0} %add.673), slice={[0:16], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice"}
  %reshape.1491 = f32[16,16]{1,0} reshape(f32[16,1,16]{2,1,0} %slice.1490), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1492 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %reshape.1491), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.3 = f32[16,16]{0,1} dot(f32[16,16]{1,0} %multiply.1152, f32[16,16]{0,1} %transpose.1492), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.117 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.3), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1502 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1508 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %add.1217, f32[] %constant.1502), dimensions={0,1}, to_apply=%AddComputation.1504, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.118 = f32[16]{0} custom-call(f32[16]{0} %reduce.1508), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1524 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1217, f32[16,128,16]{2,1,0} %reshape.658), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1525 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1531 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1524, f32[] %constant.1525), dimensions={0,1}, to_apply=%AddComputation.1527, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.119 = f32[16]{0} custom-call(f32[16]{0} %reduce.1531), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1541 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1547 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1233, f32[] %constant.1541), dimensions={0,1}, to_apply=%AddComputation.1543, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.120 = f32[16]{0} custom-call(f32[16]{0} %reduce.1547), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1557 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %custom-call.90), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1558 = f32[4096,2048]{0,1} transpose(f32[2048,4096]{1,0} %reshape.1557), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.4 = f32[16,4096]{0,1} dot(f32[2048,16]{1,0} %reshape.1234, f32[4096,2048]{0,1} %transpose.1558), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.121 = f32[16,4096]{1,0} custom-call(f32[16,4096]{0,1} %dot.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1568 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1574 = f32[4096]{0} reduce(f32[16,128,4096]{2,1,0} %multiply.11, f32[] %constant.1568), dimensions={0,1}, to_apply=%AddComputation.1570, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.122 = f32[4096]{0} custom-call(f32[4096]{0} %reduce.1574), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1584 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.544), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1585 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1584), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.5 = f32[4096,16]{0,1} dot(f32[2048,4096]{1,0} %reshape.1247, f32[16,2048]{0,1} %transpose.1585), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.123 = f32[4096,16]{1,0} custom-call(f32[4096,16]{0,1} %dot.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1595 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1601 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %add.1251, f32[] %constant.1595), dimensions={0,1}, to_apply=%AddComputation.1597, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.124 = f32[16]{0} custom-call(f32[16]{0} %reduce.1601), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1617 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1251, f32[16,128,16]{2,1,0} %reshape.529), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1618 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1624 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1617, f32[] %constant.1618), dimensions={0,1}, to_apply=%AddComputation.1620, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.125 = f32[16]{0} custom-call(f32[16]{0} %reduce.1624), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1634 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1640 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1267, f32[] %constant.1634), dimensions={0,1}, to_apply=%AddComputation.1636, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.126 = f32[16]{0} custom-call(f32[16]{0} %reduce.1640), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1650 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.507), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1651 = f32[16,128,2,8]{3,1,2,0} transpose(f32[16,2,128,8]{3,2,1,0} %reshape.1650), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1653 = f32[2048,16]{1,0} reshape(f32[16,128,2,8]{3,1,2,0} %transpose.1651), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1654 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1653), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.6 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.1268, f32[16,2048]{0,1} %transpose.1654), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.127 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1664 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.1325), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1667 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.14 = f32[2,8]{1,0} reduce(f32[16,2,128,8]{3,2,1,0} %reshape.1664, f32[] %constant.1667), dimensions={0,2}, to_apply=%AddComputation.1669, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1675 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.14), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.128 = f32[16]{0} custom-call(f32[16]{0} %reshape.1675), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1683 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1684 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1683), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.7 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.1329, f32[16,2048]{0,1} %transpose.1684), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.129 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1694 = f32[16,2,8,128]{3,2,1,0} reshape(f32[32,8,128]{2,1,0} %dot.1307), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1698 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.15 = f32[2,8]{1,0} reduce(f32[16,2,8,128]{3,2,1,0} %reshape.1694, f32[] %constant.1698), dimensions={0,3}, to_apply=%AddComputation.1700, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1706 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.15), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.130 = f32[16]{0} custom-call(f32[16]{0} %reshape.1706), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1714 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1715 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1714), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.8 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.1312, f32[16,2048]{0,1} %transpose.1715), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.131 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1725 = f32[16,2,128,8]{3,2,1,0} reshape(f32[32,128,8]{2,1,0} %dot.1290), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1728 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.16 = f32[2,8]{1,0} reduce(f32[16,2,128,8]{3,2,1,0} %reshape.1725, f32[] %constant.1728), dimensions={0,2}, to_apply=%AddComputation.1730, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1736 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.16), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.132 = f32[16]{0} custom-call(f32[16]{0} %reshape.1736), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1744 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.256), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1745 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1744), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.9 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.1294, f32[16,2048]{0,1} %transpose.1745), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.133 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1755 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1761 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1336, f32[] %constant.1755), dimensions={0,1}, to_apply=%AddComputation.1757, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.134 = f32[16]{0} custom-call(f32[16]{0} %reduce.1761), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1777 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %multiply.1336, f32[16,128,16]{2,1,0} %reshape.239), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1778 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1784 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1777, f32[] %constant.1778), dimensions={0,1}, to_apply=%AddComputation.1780, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.135 = f32[16]{0} custom-call(f32[16]{0} %reduce.1784), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.16 = f32[] constant(0)
  %broadcast.34 = f32[512,16]{1,0} broadcast(f32[] %constant.16), dimensions={}
  %slice.1795 = s64[1,128]{1,0} slice(s64[1,512]{1,0} %p11.177), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.12 = s64[128]{0} reshape(s64[1,128]{1,0} %slice.1795)
  %constant.17 = s64[] constant(0)
  %broadcast.35 = s64[128]{0} broadcast(s64[] %constant.17), dimensions={}
  %compare.6 = pred[128]{0} compare(s64[128]{0} %reshape.12, s64[128]{0} %broadcast.35), direction=GE
  %constant.18 = s64[] constant(512)
  %broadcast.36 = s64[128]{0} broadcast(s64[] %constant.18), dimensions={}
  %add.2 = s64[128]{0} add(s64[128]{0} %reshape.12, s64[128]{0} %broadcast.36)
  %select.4 = s64[128]{0} select(pred[128]{0} %compare.6, s64[128]{0} %reshape.12, s64[128]{0} %add.2)
  %reshape.13 = s64[128,1]{1,0} reshape(s64[128]{0} %select.4)
  %reshape.1796 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1348), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1797 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1803 = f32[128,16]{1,0} reduce(f32[16,128,16]{2,1,0} %reshape.1796, f32[] %constant.1797), dimensions={0}, to_apply=%AddComputation.1799, metadata={op_type="aten__sum" op_name="aten__sum"}
  %scatter.0 = f32[512,16]{1,0} scatter(f32[512,16]{1,0} %broadcast.34, s64[128,1]{1,0} %reshape.13, f32[128,16]{1,0} %reduce.1803), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1805, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.136 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %scatter.0), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.19 = f32[] constant(0)
  %broadcast.37 = f32[2,16]{1,0} broadcast(f32[] %constant.19), dimensions={}
  %reshape.15 = s64[2048]{0} reshape(s64[16,128]{1,0} %p13.198)
  %constant.20 = s64[] constant(0)
  %broadcast.38 = s64[2048]{0} broadcast(s64[] %constant.20), dimensions={}
  %compare.7 = pred[2048]{0} compare(s64[2048]{0} %reshape.15, s64[2048]{0} %broadcast.38), direction=GE
  %constant.21 = s64[] constant(2)
  %broadcast.39 = s64[2048]{0} broadcast(s64[] %constant.21), dimensions={}
  %add.3 = s64[2048]{0} add(s64[2048]{0} %reshape.15, s64[2048]{0} %broadcast.39)
  %select.5 = s64[2048]{0} select(pred[2048]{0} %compare.7, s64[2048]{0} %reshape.15, s64[2048]{0} %add.3)
  %reshape.16 = s64[2048,1]{1,0} reshape(s64[2048]{0} %select.5)
  %reshape.17 = f32[2048,16]{1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1348)
  %scatter.1 = f32[2,16]{1,0} scatter(f32[2,16]{1,0} %broadcast.37, s64[2048,1]{1,0} %reshape.16, f32[2048,16]{1,0} %reshape.17), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1834, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.137 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %scatter.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  ROOT %tuple.1863 = (f32[1]{0}, f32[16,128,30522]{2,1,0}, f32[16,2]{1,0}, f32[], f32[], /*index=5*/f32[2]{0}, f32[2,16]{1,0}, f32[30522]{0}, f32[30522,16]{1,0}, f32[16]{0}, /*index=10*/f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, /*index=15*/f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,4096]{1,0}, f32[4096]{0}, /*index=20*/f32[4096,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, /*index=25*/f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, /*index=30*/f32[16,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[512,16]{1,0}, f32[2,16]{1,0}) tuple(f32[1]{0} %add.945, f32[16,128,30522]{2,1,0} %add.873, f32[16,2]{1,0} %add.689, f32[] %add.940, f32[] %divide.941, /*index=5*/f32[2]{0} %custom-call.107, f32[2,16]{1,0} %custom-call.108, f32[30522]{0} %custom-call.109, f32[30522,16]{1,0} %add.1406, f32[16]{0} %custom-call.112, /*index=10*/f32[16]{0} %custom-call.113, f32[16]{0} %custom-call.114, f32[16,16]{1,0} %custom-call.115, f32[16]{0} %custom-call.116, f32[16,16]{1,0} %custom-call.117, /*index=15*/f32[16]{0} %custom-call.118, f32[16]{0} %custom-call.119, f32[16]{0} %custom-call.120, f32[16,4096]{1,0} %custom-call.121, f32[4096]{0} %custom-call.122, /*index=20*/f32[4096,16]{1,0} %custom-call.123, f32[16]{0} %custom-call.124, f32[16]{0} %custom-call.125, f32[16]{0} %custom-call.126, f32[16,16]{1,0} %custom-call.127, /*index=25*/f32[16]{0} %custom-call.128, f32[16,16]{1,0} %custom-call.129, f32[16]{0} %custom-call.130, f32[16,16]{1,0} %custom-call.131, f32[16]{0} %custom-call.132, /*index=30*/f32[16,16]{1,0} %custom-call.133, f32[16]{0} %custom-call.134, f32[16]{0} %custom-call.135, f32[512,16]{1,0} %custom-call.136, f32[2,16]{1,0} %custom-call.137), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33,output34"}
}

`

export default text;
