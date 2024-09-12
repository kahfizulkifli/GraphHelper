const text = `
HloModule SyncTensorsGraph.366, input_output_alias={ {0}: (2, {}, must-alias), {1}: (1, {}, must-alias), {2}: (4, {}, must-alias), {3}: (5, {}, must-alias), {4}: (6, {}, must-alias), {5}: (7, {}, must-alias), {6}: (14, {}, must-alias), {7}: (13, {}, must-alias), {8}: (12, {}, must-alias), {9}: (11, {}, must-alias), {10}: (10, {}, must-alias), {11}: (9, {}, must-alias) }

%MaxComputation.93 (x.94: f32[], y.95: f32[]) -> f32[] {
  %x.94 = f32[] parameter(0)
  %y.95 = f32[] parameter(1)
  ROOT %maximum.96 = f32[] maximum(f32[] %x.94, f32[] %y.95)
}

%AddComputation.102 (x.103: f32[], y.104: f32[]) -> f32[] {
  %x.103 = f32[] parameter(0)
  %y.104 = f32[] parameter(1)
  ROOT %add.105 = f32[] add(f32[] %x.103, f32[] %y.104)
}

%AddComputation.137 (x.138: f32[], y.139: f32[]) -> f32[] {
  %x.138 = f32[] parameter(0)
  %y.139 = f32[] parameter(1)
  ROOT %add.140 = f32[] add(f32[] %x.138, f32[] %y.139)
}

%AddComputation.149 (x.150: f32[], y.151: f32[]) -> f32[] {
  %x.150 = f32[] parameter(0)
  %y.151 = f32[] parameter(1)
  ROOT %add.152 = f32[] add(f32[] %x.150, f32[] %y.151)
}

%AddComputation.199 (x.200: f32[], y.201: f32[]) -> f32[] {
  %x.200 = f32[] parameter(0)
  %y.201 = f32[] parameter(1)
  ROOT %add.202 = f32[] add(f32[] %x.200, f32[] %y.201)
}

%AddComputation.253 (x.254: f32[], y.255: f32[]) -> f32[] {
  %x.254 = f32[] parameter(0)
  %y.255 = f32[] parameter(1)
  ROOT %add.256 = f32[] add(f32[] %x.254, f32[] %y.255)
}

%AddComputation.307 (x.308: f32[], y.309: f32[]) -> f32[] {
  %x.308 = f32[] parameter(0)
  %y.309 = f32[] parameter(1)
  ROOT %add.310 = f32[] add(f32[] %x.308, f32[] %y.309)
}

%AddComputation.353 (x.354: f32[], y.355: f32[]) -> f32[] {
  %x.354 = f32[] parameter(0)
  %y.355 = f32[] parameter(1)
  ROOT %add.356 = f32[] add(f32[] %x.354, f32[] %y.355)
}

%AddComputation.359 (x.360: f32[], y.361: f32[]) -> f32[] {
  %x.360 = f32[] parameter(0)
  %y.361 = f32[] parameter(1)
  ROOT %add.362 = f32[] add(f32[] %x.360, f32[] %y.361)
}

ENTRY %SyncTensorsGraph.366 (p0.1: f32[], p1.11: f32[120], p2.19: f32[120,784], p3.28: f32[32,1,28,28], p4.39: f32[84,120], p5.49: f32[84], p6.67: f32[10,84], p7.77: f32[10], p8.110: s64[32], p9.184: f32[120,784], p10.214: f32[120], p11.238: f32[84,120], p12.268: f32[84], p13.292: f32[10,84], p14.322: f32[10]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[10], f32[10,84], f32[84], f32[84,120], /*index=10*/f32[120], f32[120,784], f32[32,784], f32[32,10], f32[]) {
  %p2.19 = f32[120,784]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p9.184 = f32[120,784]{1,0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %p3.28 = f32[32,1,28,28]{3,2,1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train_torchrun.py" source_line=91}
  %reshape.29 = f32[32,784]{1,0} reshape(f32[32,1,28,28]{3,2,1,0} %p3.28), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.12 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p2.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.27 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.12), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.30 = f32[32,120]{1,0} dot(f32[32,784]{1,0} %reshape.29, f32[784,120]{0,1} %transpose.27), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p1.11 = f32[120]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.13 = f32[120]{0} custom-call(f32[120]{0} %p1.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.34 = f32[32,120]{1,0} broadcast(f32[120]{0} %custom-call.13), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.35 = f32[32,120]{1,0} add(f32[32,120]{1,0} %dot.30, f32[32,120]{1,0} %broadcast.34), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.36 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.37 = f32[32,120]{1,0} broadcast(f32[] %constant.36), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.38 = f32[32,120]{1,0} maximum(f32[32,120]{1,0} %add.35, f32[32,120]{1,0} %broadcast.37), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.166 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.169 = f32[32,120]{1,0} broadcast(f32[] %constant.166), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.170 = pred[32,120]{1,0} compare(f32[32,120]{1,0} %maximum.38, f32[32,120]{1,0} %broadcast.169), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p4.39 = f32[84,120]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.15 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p4.39), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.57 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.15), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.58 = f32[32,84]{1,0} dot(f32[32,120]{1,0} %maximum.38, f32[120,84]{0,1} %transpose.57), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p5.49 = f32[84]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[84]{0} custom-call(f32[84]{0} %p5.49), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.62 = f32[32,84]{1,0} broadcast(f32[84]{0} %custom-call.16), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.63 = f32[32,84]{1,0} add(f32[32,84]{1,0} %dot.58, f32[32,84]{1,0} %broadcast.62), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.64 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.65 = f32[32,84]{1,0} broadcast(f32[] %constant.64), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.66 = f32[32,84]{1,0} maximum(f32[32,84]{1,0} %add.63, f32[32,84]{1,0} %broadcast.65), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %constant.159 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.162 = f32[32,84]{1,0} broadcast(f32[] %constant.159), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.163 = pred[32,84]{1,0} compare(f32[32,84]{1,0} %maximum.66, f32[32,84]{1,0} %broadcast.162), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %p8.110 = s64[32]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.116 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.110), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.119 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.116, s64[32,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.114 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.121 = f32[32,10]{1,0} broadcast(f32[] %constant.114), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.113 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.120 = f32[32,10]{1,0} broadcast(f32[] %constant.113), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.122 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.119, f32[32,10]{1,0} %broadcast.121, f32[32,10]{1,0} %broadcast.120), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.123 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.122), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.126 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.127 = s64[32]{0} broadcast(s64[] %constant.126), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.128 = pred[32]{0} compare(s64[32]{0} %p8.110, s64[32]{0} %broadcast.127), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.129 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[32]{0} broadcast(f32[] %constant.129), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.131 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[32]{0} broadcast(f32[] %constant.131), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[32]{0} select(pred[32]{0} %compare.128, f32[32]{0} %broadcast.1, f32[32]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.135 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.4, f32[32,10]{1,0} %select.122), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.145 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.123, f32[32,10]{1,0} %multiply.135), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.136 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.141 = f32[] reduce(f32[32,10]{1,0} %multiply.135, f32[] %constant.136), dimensions={0,1}, to_apply=%AddComputation.137, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.143 = pred[] compare(f32[] %reduce.141, f32[] %constant.136), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.142 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.144 = f32[] select(pred[] %compare.143, f32[] %reduce.141, f32[] %constant.142), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.146 = f32[32,10]{1,0} broadcast(f32[] %select.144), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.147 = f32[32,10]{1,0} divide(f32[32,10]{1,0} %multiply.145, f32[32,10]{1,0} %broadcast.146), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p6.67 = f32[10,84]{1,0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.17 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p6.67), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.85 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.17), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.86 = f32[32,10]{1,0} dot(f32[32,84]{1,0} %maximum.66, f32[84,10]{0,1} %transpose.85), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p7.77 = f32[10]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.18 = f32[10]{0} custom-call(f32[10]{0} %p7.77), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.90 = f32[32,10]{1,0} broadcast(f32[10]{0} %custom-call.18), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.91 = f32[32,10]{1,0} add(f32[32,10]{1,0} %dot.86, f32[32,10]{1,0} %broadcast.90), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.92 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.97 = f32[32]{0} reduce(f32[32,10]{1,0} %add.91, f32[] %constant.92), dimensions={1}, to_apply=%MaxComputation.93, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.98 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.97), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.99 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %add.91, f32[32,10]{1,0} %broadcast.98), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.100 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.99), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.101 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.106 = f32[32]{0} reduce(f32[32,10]{1,0} %exponential.100, f32[] %constant.101), dimensions={1}, to_apply=%AddComputation.102, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.107 = f32[32]{0} log(f32[32]{0} %reduce.106), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.108 = f32[32,10]{1,0} broadcast(f32[32]{0} %log.107), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.109 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %subtract.99, f32[32,10]{1,0} %broadcast.108), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.154 = f32[32,10]{1,0} exponential(f32[32,10]{1,0} %subtract.109), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.148 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.153 = f32[32]{0} reduce(f32[32,10]{1,0} %divide.147, f32[] %constant.148), dimensions={1}, to_apply=%AddComputation.149, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.155 = f32[32,10]{1,0} broadcast(f32[32]{0} %reduce.153), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.156 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %exponential.154, f32[32,10]{1,0} %broadcast.155), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.157 = f32[32,10]{1,0} subtract(f32[32,10]{1,0} %divide.147, f32[32,10]{1,0} %multiply.156), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %dot.158 = f32[32,84]{1,0} dot(f32[32,10]{1,0} %subtract.157, f32[10,84]{1,0} %custom-call.17), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.160 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.161 = f32[32,84]{1,0} broadcast(f32[] %constant.160), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.164 = f32[32,84]{1,0} select(pred[32,84]{1,0} %compare.163, f32[32,84]{1,0} %dot.158, f32[32,84]{1,0} %broadcast.161), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.165 = f32[32,120]{1,0} dot(f32[32,84]{1,0} %select.164, f32[84,120]{1,0} %custom-call.15), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.167 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.168 = f32[32,120]{1,0} broadcast(f32[] %constant.167), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.171 = f32[32,120]{1,0} select(pred[32,120]{1,0} %compare.170, f32[32,120]{1,0} %dot.165, f32[32,120]{1,0} %broadcast.168), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %reshape.172 = f32[32,784]{1,0} reshape(f32[32,1,28,28]{3,2,1,0} %p3.28), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.173 = f32[784,32]{0,1} transpose(f32[32,784]{1,0} %reshape.172), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[120,784]{0,1} dot(f32[32,120]{1,0} %select.171, f32[784,32]{0,1} %transpose.173), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.19 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.185 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p9.184, f32[120,784]{1,0} %custom-call.19), metadata={op_type="aten__add" op_name="aten__add"}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.5 = f32[120,784]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.186 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %add.185, f32[120,784]{1,0} %broadcast.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.187 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p2.19, f32[120,784]{1,0} %multiply.186), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p10.214 = f32[120]{0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.197 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.203 = f32[120]{0} reduce(f32[32,120]{1,0} %select.171, f32[] %constant.197), dimensions={0}, to_apply=%AddComputation.199, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.20 = f32[120]{0} custom-call(f32[120]{0} %reduce.203), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.215 = f32[120]{0} add(f32[120]{0} %p10.214, f32[120]{0} %custom-call.20), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.191 = f32[120]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.216 = f32[120]{0} multiply(f32[120]{0} %add.215, f32[120]{0} %broadcast.191), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.217 = f32[120]{0} add(f32[120]{0} %p1.11, f32[120]{0} %multiply.216), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p11.238 = f32[84,120]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.227 = f32[120,32]{0,1} transpose(f32[32,120]{1,0} %maximum.38), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[84,120]{0,1} dot(f32[32,84]{1,0} %select.164, f32[120,32]{0,1} %transpose.227), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.21 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.239 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p11.238, f32[84,120]{1,0} %custom-call.21), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.221 = f32[84,120]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.240 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %add.239, f32[84,120]{1,0} %broadcast.221), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.241 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p4.39, f32[84,120]{1,0} %multiply.240), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p12.268 = f32[84]{0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.251 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.257 = f32[84]{0} reduce(f32[32,84]{1,0} %select.164, f32[] %constant.251), dimensions={0}, to_apply=%AddComputation.253, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.23 = f32[84]{0} custom-call(f32[84]{0} %reduce.257), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.269 = f32[84]{0} add(f32[84]{0} %p12.268, f32[84]{0} %custom-call.23), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.245 = f32[84]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.270 = f32[84]{0} multiply(f32[84]{0} %add.269, f32[84]{0} %broadcast.245), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.271 = f32[84]{0} add(f32[84]{0} %p5.49, f32[84]{0} %multiply.270), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p13.292 = f32[10,84]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.281 = f32[84,32]{0,1} transpose(f32[32,84]{1,0} %maximum.66), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[10,84]{0,1} dot(f32[32,10]{1,0} %subtract.157, f32[84,32]{0,1} %transpose.281), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.24 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.293 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p13.292, f32[10,84]{1,0} %custom-call.24), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.275 = f32[10,84]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.294 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %add.293, f32[10,84]{1,0} %broadcast.275), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.295 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p6.67, f32[10,84]{1,0} %multiply.294), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %p14.322 = f32[10]{0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.305 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.311 = f32[10]{0} reduce(f32[32,10]{1,0} %subtract.157, f32[] %constant.305), dimensions={0}, to_apply=%AddComputation.307, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.25 = f32[10]{0} custom-call(f32[10]{0} %reduce.311), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.323 = f32[10]{0} add(f32[10]{0} %p14.322, f32[10]{0} %custom-call.25), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.299 = f32[10]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.324 = f32[10]{0} multiply(f32[10]{0} %add.323, f32[10]{0} %broadcast.299), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.325 = f32[10]{0} add(f32[10]{0} %p7.77, f32[10]{0} %multiply.324), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.329 = s64[32,10]{1,0} broadcast(s64[32]{0} %p8.110), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[32,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.332 = pred[32,10]{1,0} compare(s64[32,10]{1,0} %broadcast.329, s64[32,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.327 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.334 = f32[32,10]{1,0} broadcast(f32[] %constant.327), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.326 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.333 = f32[32,10]{1,0} broadcast(f32[] %constant.326), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.335 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.332, f32[32,10]{1,0} %broadcast.334, f32[32,10]{1,0} %broadcast.333), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.338 = f32[32,10]{1,0} broadcast(f32[] %constant.327), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.339 = pred[32,10]{1,0} compare(f32[32,10]{1,0} %select.335, f32[32,10]{1,0} %broadcast.338), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.340 = f32[32,10]{1,0} broadcast(f32[] %constant.326), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.336 = f32[32,10]{1,0} negate(f32[32,10]{1,0} %select.335), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.337 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %negate.336, f32[32,10]{1,0} %subtract.109), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.341 = f32[32,10]{1,0} select(pred[32,10]{1,0} %compare.339, f32[32,10]{1,0} %broadcast.340, f32[32,10]{1,0} %multiply.337), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.342 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.343 = s64[32]{0} broadcast(s64[] %constant.342), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.344 = pred[32]{0} compare(s64[32]{0} %p8.110, s64[32]{0} %broadcast.343), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.345 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.6 = f32[32]{0} broadcast(f32[] %constant.345), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.347 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.7 = f32[32]{0} broadcast(f32[] %constant.347), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[32]{0} select(pred[32]{0} %compare.344, f32[32]{0} %broadcast.6, f32[32]{0} %broadcast.7), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.9 = f32[32,10]{1,0} broadcast(f32[32]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.351 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %broadcast.9, f32[32,10]{1,0} %select.335), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.358 = f32[32,10]{1,0} multiply(f32[32,10]{1,0} %select.341, f32[32,10]{1,0} %multiply.351), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.363 = f32[] reduce(f32[32,10]{1,0} %multiply.358, f32[] %constant.326), dimensions={0,1}, to_apply=%AddComputation.359, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.352 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.357 = f32[] reduce(f32[32,10]{1,0} %multiply.351, f32[] %constant.352), dimensions={0,1}, to_apply=%AddComputation.353, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.364 = f32[] divide(f32[] %reduce.363, f32[] %reduce.357), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.365 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, /*index=10*/f32[120]{0}, f32[120,784]{1,0}, f32[32,784]{1,0}, f32[32,10]{1,0}, f32[]) tuple(f32[120,784]{1,0} %add.187, f32[120]{0} %add.217, f32[84,120]{1,0} %add.241, f32[84]{0} %add.271, f32[10,84]{1,0} %add.295, /*index=5*/f32[10]{0} %add.325, f32[10]{0} %add.323, f32[10,84]{1,0} %add.293, f32[84]{0} %add.269, f32[84,120]{1,0} %add.239, /*index=10*/f32[120]{0} %add.215, f32[120,784]{1,0} %add.185, f32[32,784]{1,0} %reshape.29, f32[32,10]{1,0} %subtract.109, f32[] %divide.364), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14"}
}


`

export default text;