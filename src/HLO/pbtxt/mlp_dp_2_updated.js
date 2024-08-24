const text = `
HloModule SyncTensorsGraph.357, input_output_alias={ {0}: (3, {}, must-alias), {1}: (2, {}, must-alias), {2}: (5, {}, must-alias), {3}: (6, {}, must-alias), {4}: (7, {}, must-alias), {5}: (8, {}, must-alias) }

%MaxComputation.89 (x.90: f32[], y.91: f32[]) -> f32[] {
  %x.90 = f32[] parameter(0)
  %y.91 = f32[] parameter(1)
  ROOT %maximum.92 = f32[] maximum(f32[] %x.90, f32[] %y.91)
}

%AddComputation.98 (x.99: f32[], y.100: f32[]) -> f32[] {
  %x.99 = f32[] parameter(0)
  %y.100 = f32[] parameter(1)
  ROOT %add.101 = f32[] add(f32[] %x.99, f32[] %y.100)
}

%AddComputation.133 (x.134: f32[], y.135: f32[]) -> f32[] {
  %x.134 = f32[] parameter(0)
  %y.135 = f32[] parameter(1)
  ROOT %add.136 = f32[] add(f32[] %x.134, f32[] %y.135)
}

%AddComputation.145 (x.146: f32[], y.147: f32[]) -> f32[] {
  %x.146 = f32[] parameter(0)
  %y.147 = f32[] parameter(1)
  ROOT %add.148 = f32[] add(f32[] %x.146, f32[] %y.147)
}

%AddComputation.181 (x.182: f32[], y.183: f32[]) -> f32[] {
  %x.182 = f32[] parameter(0)
  %y.183 = f32[] parameter(1)
  ROOT %add.184 = f32[] add(f32[] %x.182, f32[] %y.183)
}

%AddComputation.207 (x.208: f32[], y.209: f32[]) -> f32[] {
  %x.208 = f32[] parameter(0)
  %y.209 = f32[] parameter(1)
  ROOT %add.210 = f32[] add(f32[] %x.208, f32[] %y.209)
}

%AddComputation.233 (x.234: f32[], y.235: f32[]) -> f32[] {
  %x.234 = f32[] parameter(0)
  %y.235 = f32[] parameter(1)
  ROOT %add.236 = f32[] add(f32[] %x.234, f32[] %y.235)
}

%AddComputation.255 (x.256: f32[], y.257: f32[]) -> f32[] {
  %x.256 = f32[] parameter(0)
  %y.257 = f32[] parameter(1)
  ROOT %add.258 = f32[] add(f32[] %x.256, f32[] %y.257)
}

%AddComputation.344 (x.345: f32[], y.346: f32[]) -> f32[] {
  %x.345 = f32[] parameter(0)
  %y.346 = f32[] parameter(1)
  ROOT %add.347 = f32[] add(f32[] %x.345, f32[] %y.346)
}

%AddComputation.350 (x.351: f32[], y.352: f32[]) -> f32[] {
  %x.351 = f32[] parameter(0)
  %y.352 = f32[] parameter(1)
  ROOT %add.353 = f32[] add(f32[] %x.351, f32[] %y.352)
}

ENTRY %SyncTensorsGraph.357 (p0.1: f32[], p1.6: f32[], p2.7: f32[120], p3.15: f32[120,784], p4.24: f32[16,1,28,28], p5.35: f32[84,120], p6.45: f32[84], p7.63: f32[10,84], p8.73: f32[10], p9.106: s64[16]) -> (f32[120,784], f32[120], f32[84,120], f32[84], f32[10,84], /*index=5*/f32[10], f32[16,784], f32[16,10], f32[]) {
  %p3.15 = f32[120,784]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p9.106 = s64[16]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.112 = s64[16,10]{1,0} broadcast(s64[16]{0} %p9.106), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %iota.1 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.115 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.112, s64[16,10]{1,0} %iota.1), direction=EQ, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.110 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.117 = f32[16,10]{1,0} broadcast(f32[] %constant.110), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.109 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.116 = f32[16,10]{1,0} broadcast(f32[] %constant.109), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.118 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.115, f32[16,10]{1,0} %broadcast.117, f32[16,10]{1,0} %broadcast.116), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %negate.119 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.118), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.122 = s64[] constant(-100), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.123 = s64[16]{0} broadcast(s64[] %constant.122), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.124 = pred[16]{0} compare(s64[16]{0} %p9.106, s64[16]{0} %broadcast.123), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.125 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.1 = f32[16]{0} broadcast(f32[] %constant.125), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.127 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.2 = f32[16]{0} broadcast(f32[] %constant.127), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.0 = f32[16]{0} select(pred[16]{0} %compare.124, f32[16]{0} %broadcast.1, f32[16]{0} %broadcast.2), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.4 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.0), dimensions={0}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.131 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.4, f32[16,10]{1,0} %select.118), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %multiply.141 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.119, f32[16,10]{1,0} %multiply.131), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.132 = f32[] constant(0), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %reduce.137 = f32[] reduce(f32[16,10]{1,0} %multiply.131, f32[] %constant.132), dimensions={0,1}, to_apply=%AddComputation.133, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %compare.139 = pred[] compare(f32[] %reduce.137, f32[] %constant.132), direction=NE, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %constant.138 = f32[] constant(1), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %select.140 = f32[] select(pred[] %compare.139, f32[] %reduce.137, f32[] %constant.138), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %broadcast.142 = f32[16,10]{1,0} broadcast(f32[] %select.140), dimensions={}, metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %divide.143 = f32[16,10]{1,0} divide(f32[16,10]{1,0} %multiply.141, f32[16,10]{1,0} %broadcast.142), metadata={op_type="aten__nll_loss_backward" op_name="aten__nll_loss_backward"}
  %p4.24 = f32[16,1,28,28]{3,2,1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="train_torchrun.py" source_line=88}
  %reshape.25 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p4.24), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %custom-call.13 = f32[120,784]{1,0} custom-call(f32[120,784]{1,0} %p3.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.23 = f32[784,120]{0,1} transpose(f32[120,784]{1,0} %custom-call.13), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.26 = f32[16,120]{1,0} dot(f32[16,784]{1,0} %reshape.25, f32[784,120]{0,1} %transpose.23), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p2.7 = f32[120]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.14 = f32[120]{0} custom-call(f32[120]{0} %p2.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.30 = f32[16,120]{1,0} broadcast(f32[120]{0} %custom-call.14), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.31 = f32[16,120]{1,0} add(f32[16,120]{1,0} %dot.26, f32[16,120]{1,0} %broadcast.30), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.32 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.33 = f32[16,120]{1,0} broadcast(f32[] %constant.32), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.34 = f32[16,120]{1,0} maximum(f32[16,120]{1,0} %add.31, f32[16,120]{1,0} %broadcast.33), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %p5.35 = f32[84,120]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.15 = f32[84,120]{1,0} custom-call(f32[84,120]{1,0} %p5.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.53 = f32[120,84]{0,1} transpose(f32[84,120]{1,0} %custom-call.15), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.54 = f32[16,84]{1,0} dot(f32[16,120]{1,0} %maximum.34, f32[120,84]{0,1} %transpose.53), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p6.45 = f32[84]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[84]{0} custom-call(f32[84]{0} %p6.45), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.58 = f32[16,84]{1,0} broadcast(f32[84]{0} %custom-call.16), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.59 = f32[16,84]{1,0} add(f32[16,84]{1,0} %dot.54, f32[16,84]{1,0} %broadcast.58), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.60 = f32[] constant(0), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %broadcast.61 = f32[16,84]{1,0} broadcast(f32[] %constant.60), dimensions={}, metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %maximum.62 = f32[16,84]{1,0} maximum(f32[16,84]{1,0} %add.59, f32[16,84]{1,0} %broadcast.61), metadata={op_type="aten__relu" op_name="aten__relu" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1471}
  %p7.63 = f32[10,84]{1,0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.17 = f32[10,84]{1,0} custom-call(f32[10,84]{1,0} %p7.63), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.81 = f32[84,10]{0,1} transpose(f32[10,84]{1,0} %custom-call.17), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %dot.82 = f32[16,10]{1,0} dot(f32[16,84]{1,0} %maximum.62, f32[84,10]{0,1} %transpose.81), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %p8.73 = f32[10]{0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.19 = f32[10]{0} custom-call(f32[10]{0} %p8.73), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.86 = f32[16,10]{1,0} broadcast(f32[10]{0} %custom-call.19), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %add.87 = f32[16,10]{1,0} add(f32[16,10]{1,0} %dot.82, f32[16,10]{1,0} %broadcast.86), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/modules/linear.py" source_line=114}
  %constant.88 = f32[] constant(-inf), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.93 = f32[16]{0} reduce(f32[16,10]{1,0} %add.87, f32[] %constant.88), dimensions={1}, to_apply=%MaxComputation.89, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.94 = f32[16,10]{1,0} broadcast(f32[16]{0} %reduce.93), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.95 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %add.87, f32[16,10]{1,0} %broadcast.94), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.96 = f32[16,10]{1,0} exponential(f32[16,10]{1,0} %subtract.95), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %constant.97 = f32[] constant(0), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %reduce.102 = f32[16]{0} reduce(f32[16,10]{1,0} %exponential.96, f32[] %constant.97), dimensions={1}, to_apply=%AddComputation.98, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %log.103 = f32[16]{0} log(f32[16]{0} %reduce.102), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %broadcast.104 = f32[16,10]{1,0} broadcast(f32[16]{0} %log.103), dimensions={0}, metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %subtract.105 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %subtract.95, f32[16,10]{1,0} %broadcast.104), metadata={op_type="aten__log_softmax" op_name="aten__log_softmax" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=1945}
  %exponential.150 = f32[16,10]{1,0} exponential(f32[16,10]{1,0} %subtract.105), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.144 = f32[] constant(0), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %reduce.149 = f32[16]{0} reduce(f32[16,10]{1,0} %divide.143, f32[] %constant.144), dimensions={1}, to_apply=%AddComputation.145, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %broadcast.151 = f32[16,10]{1,0} broadcast(f32[16]{0} %reduce.149), dimensions={0}, metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %multiply.152 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %exponential.150, f32[16,10]{1,0} %broadcast.151), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %subtract.153 = f32[16,10]{1,0} subtract(f32[16,10]{1,0} %divide.143, f32[16,10]{1,0} %multiply.152), metadata={op_type="aten___log_softmax_backward_data" op_name="aten___log_softmax_backward_data"}
  %constant.231 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.237 = f32[10]{0} reduce(f32[16,10]{1,0} %subtract.153, f32[] %constant.231), dimensions={0}, to_apply=%AddComputation.233, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.20 = f32[10]{0} custom-call(f32[10]{0} %reduce.237), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.221 = f32[84,16]{0,1} transpose(f32[16,84]{1,0} %maximum.62), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[10,84]{0,1} dot(f32[16,10]{1,0} %subtract.153, f32[84,16]{0,1} %transpose.221), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.21 = f32[10,84]{1,0} custom-call(f32[10,84]{0,1} %dot), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.155 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.158 = f32[16,84]{1,0} broadcast(f32[] %constant.155), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.159 = pred[16,84]{1,0} compare(f32[16,84]{1,0} %maximum.62, f32[16,84]{1,0} %broadcast.158), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.154 = f32[16,84]{1,0} dot(f32[16,10]{1,0} %subtract.153, f32[10,84]{1,0} %custom-call.17), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.156 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.157 = f32[16,84]{1,0} broadcast(f32[] %constant.156), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.160 = f32[16,84]{1,0} select(pred[16,84]{1,0} %compare.159, f32[16,84]{1,0} %dot.154, f32[16,84]{1,0} %broadcast.157), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %constant.205 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.211 = f32[84]{0} reduce(f32[16,84]{1,0} %select.160, f32[] %constant.205), dimensions={0}, to_apply=%AddComputation.207, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.22 = f32[84]{0} custom-call(f32[84]{0} %reduce.211), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.195 = f32[120,16]{0,1} transpose(f32[16,120]{1,0} %maximum.34), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[84,120]{0,1} dot(f32[16,84]{1,0} %select.160, f32[120,16]{0,1} %transpose.195), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.23 = f32[84,120]{1,0} custom-call(f32[84,120]{0,1} %dot.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.162 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.165 = f32[16,120]{1,0} broadcast(f32[] %constant.162), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %compare.166 = pred[16,120]{1,0} compare(f32[16,120]{1,0} %maximum.34, f32[16,120]{1,0} %broadcast.165), direction=GT, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %dot.161 = f32[16,120]{1,0} dot(f32[16,84]{1,0} %select.160, f32[84,120]{1,0} %custom-call.15), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.163 = f32[] constant(0), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %broadcast.164 = f32[16,120]{1,0} broadcast(f32[] %constant.163), dimensions={}, metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %select.167 = f32[16,120]{1,0} select(pred[16,120]{1,0} %compare.166, f32[16,120]{1,0} %dot.161, f32[16,120]{1,0} %broadcast.164), metadata={op_type="aten__threshold_backward" op_name="aten__threshold_backward"}
  %constant.179 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.185 = f32[120]{0} reduce(f32[16,120]{1,0} %select.167, f32[] %constant.179), dimensions={0}, to_apply=%AddComputation.181, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.24 = f32[120]{0} custom-call(f32[120]{0} %reduce.185), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.168 = f32[16,784]{1,0} reshape(f32[16,1,28,28]{3,2,1,0} %p4.24), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.169 = f32[784,16]{0,1} transpose(f32[16,784]{1,0} %reshape.168), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[120,784]{0,1} dot(f32[16,120]{1,0} %select.167, f32[784,16]{0,1} %transpose.169), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.25 = f32[120,784]{1,0} custom-call(f32[120,784]{0,1} %dot.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_op_registry.py" source_line=44}
  %p1.6 = f32[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.259 = (f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) all-reduce(f32[10]{0} %custom-call.20, f32[10,84]{1,0} %custom-call.21, f32[84]{0} %custom-call.22, f32[84,120]{1,0} %custom-call.23, f32[120]{0} %custom-call.24, /*index=5*/f32[120,784]{1,0} %custom-call.25, f32[] %p1.6), replica_groups={}, constrain_layout=true, to_apply=%AddComputation.255, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.280 = f32[120,784]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=5, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %constant.281 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply = f32[] multiply(f32[] %p0.1, f32[] %constant.281), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.6 = f32[120,784]{1,0} broadcast(f32[] %multiply), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.285 = f32[120,784]{1,0} multiply(f32[120,784]{1,0} %get-tuple-element.280, f32[120,784]{1,0} %broadcast.6), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.286 = f32[120,784]{1,0} add(f32[120,784]{1,0} %p3.15, f32[120,784]{1,0} %multiply.285), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.276 = f32[120]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=4, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.277 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.2 = f32[] multiply(f32[] %p0.1, f32[] %constant.277), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.7 = f32[120]{0} broadcast(f32[] %multiply.2), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.291 = f32[120]{0} multiply(f32[120]{0} %get-tuple-element.276, f32[120]{0} %broadcast.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.292 = f32[120]{0} add(f32[120]{0} %p2.7, f32[120]{0} %multiply.291), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.272 = f32[84,120]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=3, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.273 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.4 = f32[] multiply(f32[] %p0.1, f32[] %constant.273), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.8 = f32[84,120]{1,0} broadcast(f32[] %multiply.4), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.297 = f32[84,120]{1,0} multiply(f32[84,120]{1,0} %get-tuple-element.272, f32[84,120]{1,0} %broadcast.8), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.298 = f32[84,120]{1,0} add(f32[84,120]{1,0} %p5.35, f32[84,120]{1,0} %multiply.297), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.268 = f32[84]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=2, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.269 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.6 = f32[] multiply(f32[] %p0.1, f32[] %constant.269), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.9 = f32[84]{0} broadcast(f32[] %multiply.6), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.303 = f32[84]{0} multiply(f32[84]{0} %get-tuple-element.268, f32[84]{0} %broadcast.9), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.304 = f32[84]{0} add(f32[84]{0} %p6.45, f32[84]{0} %multiply.303), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.264 = f32[10,84]{1,0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.265 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.8 = f32[] multiply(f32[] %p0.1, f32[] %constant.265), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.10 = f32[10,84]{1,0} broadcast(f32[] %multiply.8), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.309 = f32[10,84]{1,0} multiply(f32[10,84]{1,0} %get-tuple-element.264, f32[10,84]{1,0} %broadcast.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.310 = f32[10,84]{1,0} add(f32[10,84]{1,0} %p7.63, f32[10,84]{1,0} %multiply.309), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %get-tuple-element.260 = f32[10]{0} get-tuple-element((f32[10]{0}, f32[10,84]{1,0}, f32[84]{0}, f32[84,120]{1,0}, f32[120]{0}, /*index=5*/f32[120,784]{1,0}, f32[]) %all-reduce.259), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %constant.261 = f32[] constant(0.5), metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/kahfi/xla_modified/pytorch/xla/torch_xla/core/xla_model.py" source_line=484}
  %multiply.10 = f32[] multiply(f32[] %p0.1, f32[] %constant.261), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.11 = f32[10]{0} broadcast(f32[] %multiply.10), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %multiply.315 = f32[10]{0} multiply(f32[10]{0} %get-tuple-element.260, f32[10]{0} %broadcast.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %add.316 = f32[10]{0} add(f32[10]{0} %p8.73, f32[10]{0} %multiply.315), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/kahfi/pytorch/torch/optim/sgd.py" source_line=263}
  %broadcast.320 = s64[16,10]{1,0} broadcast(s64[16]{0} %p9.106), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %iota.3 = s64[16,10]{1,0} iota(), iota_dimension=1, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.323 = pred[16,10]{1,0} compare(s64[16,10]{1,0} %broadcast.320, s64[16,10]{1,0} %iota.3), direction=EQ, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.318 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.325 = f32[16,10]{1,0} broadcast(f32[] %constant.318), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.317 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.324 = f32[16,10]{1,0} broadcast(f32[] %constant.317), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.326 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.323, f32[16,10]{1,0} %broadcast.325, f32[16,10]{1,0} %broadcast.324), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.329 = f32[16,10]{1,0} broadcast(f32[] %constant.318), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.330 = pred[16,10]{1,0} compare(f32[16,10]{1,0} %select.326, f32[16,10]{1,0} %broadcast.329), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.331 = f32[16,10]{1,0} broadcast(f32[] %constant.317), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %negate.327 = f32[16,10]{1,0} negate(f32[16,10]{1,0} %select.326), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.328 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %negate.327, f32[16,10]{1,0} %subtract.105), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.332 = f32[16,10]{1,0} select(pred[16,10]{1,0} %compare.330, f32[16,10]{1,0} %broadcast.331, f32[16,10]{1,0} %multiply.328), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.333 = s64[] constant(-100), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.334 = s64[16]{0} broadcast(s64[] %constant.333), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %compare.335 = pred[16]{0} compare(s64[16]{0} %p9.106, s64[16]{0} %broadcast.334), direction=NE, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.336 = f32[] constant(1), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.12 = f32[16]{0} broadcast(f32[] %constant.336), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.338 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.13 = f32[16]{0} broadcast(f32[] %constant.338), dimensions={}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %select.1 = f32[16]{0} select(pred[16]{0} %compare.335, f32[16]{0} %broadcast.12, f32[16]{0} %broadcast.13), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %broadcast.14 = f32[16,10]{1,0} broadcast(f32[16]{0} %select.1), dimensions={0}, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.342 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %broadcast.14, f32[16,10]{1,0} %select.326), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %multiply.349 = f32[16,10]{1,0} multiply(f32[16,10]{1,0} %select.332, f32[16,10]{1,0} %multiply.342), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.354 = f32[] reduce(f32[16,10]{1,0} %multiply.349, f32[] %constant.317), dimensions={0,1}, to_apply=%AddComputation.350, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %constant.343 = f32[] constant(0), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %reduce.348 = f32[] reduce(f32[16,10]{1,0} %multiply.342, f32[] %constant.343), dimensions={0,1}, to_apply=%AddComputation.344, metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  %divide.355 = f32[] divide(f32[] %reduce.354, f32[] %reduce.348), metadata={op_type="aten__nll_loss" op_name="aten__nll_loss" source_file="/home/ubuntu/kahfi/pytorch/torch/nn/functional.py" source_line=2729}
  ROOT %tuple.356 = (f32[120,784]{1,0}, f32[120]{0}, f32[84,120]{1,0}, f32[84]{0}, f32[10,84]{1,0}, /*index=5*/f32[10]{0}, f32[16,784]{1,0}, f32[16,10]{1,0}, f32[]) tuple(f32[120,784]{1,0} %add.286, f32[120]{0} %add.292, f32[84,120]{1,0} %add.298, f32[84]{0} %add.304, f32[10,84]{1,0} %add.310, /*index=5*/f32[10]{0} %add.316, f32[16,784]{1,0} %reshape.25, f32[16,10]{1,0} %subtract.105, f32[] %divide.355), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8"}
}


`

export default text;