const text = `
HloModule SyncTensorsGraph.405, input_output_alias={ {0}: (3, {}, must-alias), {1}: (2, {}, must-alias), {2}: (5, {}, must-alias), {3}: (6, {}, must-alias), {4}: (7, {}, must-alias), {5}: (8, {}, must-alias), {6}: (15, {}, must-alias), {7}: (14, {}, must-alias), {8}: (13, {}, must-alias), {9}: (12, {}, must-alias), {10}: (11, {}, must-alias), {11}: (10, {}, must-alias) }

%MaxComputation.94 (x.95: f32[], y.96: f32[]) -> f32[] {
  %x.95 = f32[] parameter(0)
  %y.96 = f32[] parameter(1)
  ROOT %maximum.97 = f32[] maximum(f32[] %x.95, f32[] %y.96)
}

%AddComputation.103 (x.104: f32[], y.105: f32[]) -> f32[] {
  %x.104 = f32[] parameter(0)
  %y.105 = f32[] parameter(1)
  ROOT %add.106 = f32[] add(f32[] %x.104, f32[] %y.105)
}

%AddComputation.138 (x.139: f32[], y.140: f32[]) -> f32[] {
  %x.139 = f32[] parameter(0)
  %y.140 = f32[] parameter(1)
  ROOT %add.141 = f32[] add(f32[] %x.139, f32[] %y.140)
}

%AddComputation.150 (x.151: f32[], y.152: f32[]) -> f32[] {
  %x.151 = f32[] parameter(0)
  %y.152 = f32[] parameter(1)
  ROOT %add.153 = f32[] add(f32[] %x.151, f32[] %y.152)
}

%AddComputation.194 (x.195: f32[], y.196: f32[]) -> f32[] {
  %x.195 = f32[] parameter(0)
  %y.196 = f32[] parameter(1)
  ROOT %add.197 = f32[] add(f32[] %x.195, f32[] %y.196)
}

%AddComputation.236 (x.237: f32[], y.238: f32[]) -> f32[] {
  %x.237 = f32[] parameter(0)
  %y.238 = f32[] parameter(1)
  ROOT %add.239 = f32[] add(f32[] %x.237, f32[] %y.238)
}

%AddComputation.278 (x.279: f32[], y.280: f32[]) -> f32[] {
  %x.279 = f32[] parameter(0)
  %y.280 = f32[] parameter(1)
  ROOT %add.281 = f32[] add(f32[] %x.279, f32[] %y.280)
}

%AddComputation.303 (x.304: f32[], y.305: f32[]) -> f32[] {
  %x.304 = f32[] parameter(0)
  %y.305 = f32[] parameter(1)
  ROOT %add.306 = f32[] add(f32[] %x.304, f32[] %y.305)
}

%AddComputation.392 (x.393: f32[], y.394: f32[]) -> f32[] {
  %x.393 = f32[] parameter(0)
  %y.394 = f32[] parameter(1)
  ROOT %add.395 = f32[] add(f32[] %x.393, f32[] %y.394)
}

%AddComputation.398 (x.399: f32[], y.400: f32[]) -> f32[] {
  %x.399 = f32[] parameter(0)
  %y.400 = f32[] parameter(1)
  ROOT %add.401 = f32[] add(f32[] %x.399, f32[] %y.400)
}

ENTRY %SyncTensorsGraph.405 (p0.1: f32[], p1.6: f32[], p2.12: f32[120], p3.20: f32[120,784], p4.29: f32[16,1,28,28], p5.40: f32[84,120], p6.50: f32[84], p7.68: f32[10,84], p8.78: f32[10], p9.111: s64[16], p10.185: f32[120,784], p11.209: f32[120], p12.227: f32[84,120], p13.251: f32[84], p14.269: f32[10,84], p15.293: f32[10]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[10], f32[10,84], f32[84], f32[84,120], /*index=10*/f32[120], f32[120,784], f32[16,784], f32[16,10], f32[]) {
  %p3.20 = f32[120,784]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p15.293 = f32[10]{0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %p9.111 = s64[16]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.117 = s64[16,10]{1,0} broadcast(s64[16]{0} %p9.111), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.120 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.117, s64[16,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.115 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.122 = f32[16,10]{1,0} broadcast(f32[] %constant.115), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.114 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.121 = f32[16,10]{1,0} broadcast(f32[] %constant.114), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.123 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.120, f32[16,10]{1,0} %broadcast.122, f32[16,10]{1,0} %broadcast.121), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.124 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.123), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.127 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.128 = s64[16]{0} broadcast(s64[] %constant.127), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.129 = pred[16]{0} compare(s64[16]{0} %p9.111, s64[16]{0} %broadcast.128), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.130 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[16]{0} broadcast(f32[] %constant.130), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.132 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[16]{0} broadcast(f32[] %constant.132), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[16]{0} select(pred[16]{0} %compare.129, f32[16]{0} %broadcast.1, f32[16]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.136 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.4, f32[16,10]{1,0} %select.123), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.146 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.124, f32[16,10]{1,0} %multiply.136), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.137 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.142 = f32[] reduce(f32[16,10]{1,0} %multiply.136, f32[] %constant.137), dimensions={0,1}, to_apply=%AddComputation.138, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.144 = pred[] compare(f32[] %reduce.142, f32[] %constant.137), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.143 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.145 = f32[] select(pred[] %compare.144, f32[] %reduce.142, f32[] %constant.143), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.147 = f32[16,10]{1,0} broadcast(f32[] %select.145), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.148 = f32[16,10]{1,0} divide(f32[16,10]{1,0} %multiply.146, f32[16,10]{1,0} %broadcast.147), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p4.29 = f32[16,1,28,28]{3,2,1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train_torchrun.py" source_line=91}
  %reshape.30 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p4.29), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.12 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p3.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.28 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.12), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.31 = f32[16,120]{1,0} dot(f32[16,784]{1,0} %reshape.30, f32[784,120]{0,1} %transpose.28), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p2.12 = f32[120]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.13 = f32[120]{0} custom-call(f32[120]{0} %p2.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.35 = f32[16,120]{1,0} broadcast(f32[120]{0} %custom-call.13), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.36 = f32[16,120]{1,0} add(f32[16,120]{1,0} %dot.31, f32[16,120]{1,0} %broadcast.35), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.37 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.38 = f32[16,120]{1,0} broadcast(f32[] %constant.37), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.39 = f32[16,120]{1,0} maximum(f32[16,120]{1,0} %add.36, f32[16,120]{1,0} %broadcast.38), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %p5.40 = f32[84,120]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.14 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p5.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.58 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.14), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.59 = f32[16,84]{1,0} dot(f32[16,120]{1,0} %maximum.39, f32[120,84]{0,1} %transpose.58), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p6.50 = f32[84]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[84]{0} custom-call(f32[84]{0} %p6.50), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.63 = f32[16,84]{1,0} broadcast(f32[84]{0} %custom-call.16), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.64 = f32[16,84]{1,0} add(f32[16,84]{1,0} %dot.59, f32[16,84]{1,0} %broadcast.63), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.65 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.66 = f32[16,84]{1,0} broadcast(f32[] %constant.65), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.67 = f32[16,84]{1,0} maximum(f32[16,84]{1,0} %add.64, f32[16,84]{1,0} %broadcast.66), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %p7.68 = f32[10,84]{1,0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.17 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p7.68), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.86 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.17), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.87 = f32[16,10]{1,0} dot(f32[16,84]{1,0} %maximum.67, f32[84,10]{0,1} %transpose.86), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p8.78 = f32[10]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.18 = f32[10]{0} custom-call(f32[10]{0} %p8.78), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.91 = f32[16,10]{1,0} broadcast(f32[10]{0} %custom-call.18), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.92 = f32[16,10]{1,0} add(f32[16,10]{1,0} %dot.87, f32[16,10]{1,0} %broadcast.91), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.93 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.98 = f32[16]{0} reduce(f32[16,10]{1,0} %add.92, f32[] %constant.93), dimensions={1}, to_apply=%MaxComputation.94, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.99 = f32[16,10]{1,0} broadcast(f32[16]{0} %reduce.98), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.100 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %add.92, f32[16,10]{1,0} %broadcast.99), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.101 = f32[16,10]{1,0} exponential(f32[16,10]{1,0} %subtract.100), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.102 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.107 = f32[16]{0} reduce(f32[16,10]{1,0} %exponential.101, f32[] %constant.102), dimensions={1}, to_apply=%AddComputation.103, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.108 = f32[16]{0} log(f32[16]{0} %reduce.107), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.109 = f32[16,10]{1,0} broadcast(f32[16]{0} %log.108), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.110 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %subtract.100, f32[16,10]{1,0} %broadcast.109), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.155 = f32[16,10]{1,0} exponential(f32[16,10]{1,0} %subtract.110), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.149 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.154 = f32[16]{0} reduce(f32[16,10]{1,0} %divide.148, f32[] %constant.149), dimensions={1}, to_apply=%AddComputation.150, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.156 = f32[16,10]{1,0} broadcast(f32[16]{0} %reduce.154), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.157 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %exponential.155, f32[16,10]{1,0} %broadcast.156), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.158 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %divide.148, f32[16,10]{1,0} %multiply.157), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.276 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.282 = f32[10]{0} reduce(f32[16,10]{1,0} %subtract.158, f32[] %constant.276), dimensions={0}, to_apply=%AddComputation.278, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.19 = f32[10]{0} custom-call(f32[10]{0} %reduce.282), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.294 = f32[10]{0} add(f32[10]{0} %p15.293, f32[10]{0} %custom-call.19), metadata={op_type="aten__add" op_name="aten__add"}
  %p14.269 = f32[10,84]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.258 = f32[84,16]{0,1} transpose(f32[16,84]{1,0} %maximum.67), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[10,84]{0,1} dot(f32[16,10]{1,0} %subtract.158, f32[84,16]{0,1} %transpose.258), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.20 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.270 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p14.269, f32[10,84]{1,0} %custom-call.20), metadata={op_type="aten__add" op_name="aten__add"}
  %p13.251 = f32[84]{0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.160 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.163 = f32[16,84]{1,0} broadcast(f32[] %constant.160), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.164 = pred[16,84]{1,0} compare(f32[16,84]{1,0} %maximum.67, f32[16,84]{1,0} %broadcast.163), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.159 = f32[16,84]{1,0} dot(f32[16,10]{1,0} %subtract.158, f32[10,84]{1,0} %custom-call.17), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.161 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.162 = f32[16,84]{1,0} broadcast(f32[] %constant.161), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.165 = f32[16,84]{1,0} select(pred[16,84]{1,0} %compare.164, f32[16,84]{1,0} %dot.159, f32[16,84]{1,0} %broadcast.162), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %constant.234 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.240 = f32[84]{0} reduce(f32[16,84]{1,0} %select.165, f32[] %constant.234), dimensions={0}, to_apply=%AddComputation.236, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.21 = f32[84]{0} custom-call(f32[84]{0} %reduce.240), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.252 = f32[84]{0} add(f32[84]{0} %p13.251, f32[84]{0} %custom-call.21), metadata={op_type="aten__add" op_name="aten__add"}
  %p12.227 = f32[84,120]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.216 = f32[120,16]{0,1} transpose(f32[16,120]{1,0} %maximum.39), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[84,120]{0,1} dot(f32[16,84]{1,0} %select.165, f32[120,16]{0,1} %transpose.216), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.22 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.228 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p12.227, f32[84,120]{1,0} %custom-call.22), metadata={op_type="aten__add" op_name="aten__add"}
  %p11.209 = f32[120]{0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.167 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.170 = f32[16,120]{1,0} broadcast(f32[] %constant.167), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.171 = pred[16,120]{1,0} compare(f32[16,120]{1,0} %maximum.39, f32[16,120]{1,0} %broadcast.170), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.166 = f32[16,120]{1,0} dot(f32[16,84]{1,0} %select.165, f32[84,120]{1,0} %custom-call.14), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.168 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.169 = f32[16,120]{1,0} broadcast(f32[] %constant.168), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.172 = f32[16,120]{1,0} select(pred[16,120]{1,0} %compare.171, f32[16,120]{1,0} %dot.166, f32[16,120]{1,0} %broadcast.169), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %constant.192 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.198 = f32[120]{0} reduce(f32[16,120]{1,0} %select.172, f32[] %constant.192), dimensions={0}, to_apply=%AddComputation.194, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.24 = f32[120]{0} custom-call(f32[120]{0} %reduce.198), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.210 = f32[120]{0} add(f32[120]{0} %p11.209, f32[120]{0} %custom-call.24), metadata={op_type="aten__add" op_name="aten__add"}
  %p10.185 = f32[120,784]{1,0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.173 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p4.29), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.174 = f32[784,16]{0,1} transpose(f32[16,784]{1,0} %reshape.173), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[120,784]{0,1} dot(f32[16,120]{1,0} %select.172, f32[784,16]{0,1} %transpose.174), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.25 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.186 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p10.185, f32[120,784]{1,0} %custom-call.25), metadata={op_type="aten__add" op_name="aten__add"}
  %p1.6 = f32[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.307 = (f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) all-reduce(f32[10]{0} %add.294, f32[10,84]{1,0} %add.270, f32[84]{0} %add.252, f32[84,120]{1,0} %add.228, f32[120]{0} %add.210, /*index=5*/f32[120,784]{1,0} %add.186, f32[] %p1.6), replica_groups={}, constrain_layout=true, to_apply=%AddComputation.303, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.328 = f32[120,784]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=5, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.329 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply = f32[] multiply(f32[] %p0.1, f32[] %constant.329), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.6 = f32[120,784]{1,0} broadcast(f32[] %multiply), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.333 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %get-tuple-element.328, f32[120,784]{1,0} %broadcast.6), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.334 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p3.20, f32[120,784]{1,0} %multiply.333), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.324 = f32[120]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=4, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.325 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.2 = f32[] multiply(f32[] %p0.1, f32[] %constant.325), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.7 = f32[120]{0} broadcast(f32[] %multiply.2), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.339 = f32[120]{0} multiply(f32[120]{0} %get-tuple-element.324, f32[120]{0} %broadcast.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.340 = f32[120]{0} add(f32[120]{0} %p2.12, f32[120]{0} %multiply.339), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.320 = f32[84,120]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=3, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.321 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.4 = f32[] multiply(f32[] %p0.1, f32[] %constant.321), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.8 = f32[84,120]{1,0} broadcast(f32[] %multiply.4), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.345 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %get-tuple-element.320, f32[84,120]{1,0} %broadcast.8), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.346 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p5.40, f32[84,120]{1,0} %multiply.345), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.316 = f32[84]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=2, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.317 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.6 = f32[] multiply(f32[] %p0.1, f32[] %constant.317), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.10 = f32[84]{0} broadcast(f32[] %multiply.6), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.351 = f32[84]{0} multiply(f32[84]{0} %get-tuple-element.316, f32[84]{0} %broadcast.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.352 = f32[84]{0} add(f32[84]{0} %p6.50, f32[84]{0} %multiply.351), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.312 = f32[10,84]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.313 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.8 = f32[] multiply(f32[] %p0.1, f32[] %constant.313), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.12 = f32[10,84]{1,0} broadcast(f32[] %multiply.8), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.357 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %get-tuple-element.312, f32[10,84]{1,0} %broadcast.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.358 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p7.68, f32[10,84]{1,0} %multiply.357), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.308 = f32[10]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.307), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.309 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.10 = f32[] multiply(f32[] %p0.1, f32[] %constant.309), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.13 = f32[10]{0} broadcast(f32[] %multiply.10), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.363 = f32[10]{0} multiply(f32[10]{0} %get-tuple-element.308, f32[10]{0} %broadcast.13), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.364 = f32[10]{0} add(f32[10]{0} %p8.78, f32[10]{0} %multiply.363), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.310 = f32[10]{0} broadcast(f32[] %constant.309), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.311 = f32[10]{0} multiply(f32[10]{0} %get-tuple-element.308, f32[10]{0} %broadcast.310), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.314 = f32[10,84]{1,0} broadcast(f32[] %constant.313), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.315 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %get-tuple-element.312, f32[10,84]{1,0} %broadcast.314), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.318 = f32[84]{0} broadcast(f32[] %constant.317), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.319 = f32[84]{0} multiply(f32[84]{0} %get-tuple-element.316, f32[84]{0} %broadcast.318), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.322 = f32[84,120]{1,0} broadcast(f32[] %constant.321), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.323 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %get-tuple-element.320, f32[84,120]{1,0} %broadcast.322), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.326 = f32[120]{0} broadcast(f32[] %constant.325), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.327 = f32[120]{0} multiply(f32[120]{0} %get-tuple-element.324, f32[120]{0} %broadcast.326), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.330 = f32[120,784]{1,0} broadcast(f32[] %constant.329), dimensions={}, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.331 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %get-tuple-element.328, f32[120,784]{1,0} %broadcast.330), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %broadcast.368 = s64[16,10]{1,0} broadcast(s64[16]{0} %p9.111), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.371 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.368, s64[16,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.366 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.373 = f32[16,10]{1,0} broadcast(f32[] %constant.366), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.365 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.372 = f32[16,10]{1,0} broadcast(f32[] %constant.365), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.374 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.371, f32[16,10]{1,0} %broadcast.373, f32[16,10]{1,0} %broadcast.372), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.377 = f32[16,10]{1,0} broadcast(f32[] %constant.366), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.378 = pred[16,10]{1,0} compare(f32[16,10]{1,0} %select.374, f32[16,10]{1,0} %broadcast.377), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.379 = f32[16,10]{1,0} broadcast(f32[] %constant.365), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.375 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.374), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.376 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.375, f32[16,10]{1,0} %subtract.110), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.380 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.378, f32[16,10]{1,0} %broadcast.379, f32[16,10]{1,0} %multiply.376), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.381 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.382 = s64[16]{0} broadcast(s64[] %constant.381), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.383 = pred[16]{0} compare(s64[16]{0} %p9.111, s64[16]{0} %broadcast.382), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.384 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.14 = f32[16]{0} broadcast(f32[] %constant.384), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.386 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.15 = f32[16]{0} broadcast(f32[] %constant.386), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[16]{0} select(pred[16]{0} %compare.383, f32[16]{0} %broadcast.14, f32[16]{0} %broadcast.15), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.16 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.390 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.16, f32[16,10]{1,0} %select.374), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.397 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %select.380, f32[16,10]{1,0} %multiply.390), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.402 = f32[] reduce(f32[16,10]{1,0} %multiply.397, f32[] %constant.365), dimensions={0,1}, to_apply=%AddComputation.398, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.391 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.396 = f32[] reduce(f32[16,10]{1,0} %multiply.390, f32[] %constant.391), dimensions={0,1}, to_apply=%AddComputation.392, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.403 = f32[] divide(f32[] %reduce.402, f32[] %reduce.396), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.404 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, /*index=10*/f32[120]{0}, f32[120,784]{1,0}, f32[16,784]{1,0}, f32[16,10]{1,0}, f32[]) tuple(f32[120,784]{1,0} %add.334, f32[120]{0} %add.340, f32[84,120]{1,0} %add.346, f32[84]{0} %add.352, f32[10,84]{1,0} %add.358, /*index=5*/f32[10]{0} %add.364, f32[10]{0} %multiply.311, f32[10,84]{1,0} %multiply.315, f32[84]{0} %multiply.319, f32[84,120]{1,0} %multiply.323, /*index=10*/f32[120]{0} %multiply.327, f32[120,784]{1,0} %multiply.331, f32[16,784]{1,0} %reshape.30, f32[16,10]{1,0} %subtract.110, f32[] %divide.403), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14"}
}


`

export default text;